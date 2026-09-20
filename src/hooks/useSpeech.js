import { useCallback, useEffect, useId, useRef, useState } from "react";
import { chunkForSpeech, pickVoice } from "../lib/speechText";

/**
 * Text-to-speech via the browser's built-in Web Speech API.
 *
 * Browser quirks handled here:
 *  - getVoices() populates asynchronously, so we also wait for `voiceschanged`.
 *  - Chrome stops speaking after roughly 15 seconds of continuous output, so the
 *    text is chunked (see lib/speechText) and a keep-alive resume() runs while
 *    speaking. Without it, long passages cut off part-way.
 *  - An utterance can error mid-queue; we continue to the next chunk instead of
 *    abandoning the rest, unless the stop was deliberate.
 *  - speechSynthesis is global, so the active speaker is tracked module-side and
 *    other buttons reset themselves rather than both claiming to be playing.
 */

let activeId = null;
const subscribers = new Set();
const setActive = (id) => {
  activeId = id;
  subscribers.forEach((fn) => fn(id));
};

export function useSpeech() {
  const id = useId();

  const synth = typeof window === "undefined" ? null : window.speechSynthesis;
  const supported = Boolean(
    synth && typeof synth.speak === "function" && typeof window.SpeechSynthesisUtterance === "function"
  );

  const [speaking, setSpeaking] = useState(false);
  const voiceRef = useRef(null);
  const utterancesRef = useRef([]);
  const cancelledRef = useRef(false);
  const keepAliveRef = useRef(null);

  useEffect(() => {
    const onChange = (current) => setSpeaking(current === id);
    subscribers.add(onChange);
    return () => subscribers.delete(onChange);
  }, [id]);

  useEffect(() => {
    if (!supported) return;
    const pick = () => {
      const voice = pickVoice(synth.getVoices?.() ?? []);
      if (voice) voiceRef.current = voice;
    };
    pick();
    synth.addEventListener?.("voiceschanged", pick);
    return () => synth.removeEventListener?.("voiceschanged", pick);
  }, [supported, synth]);

  const clearKeepAlive = useCallback(() => {
    if (keepAliveRef.current) {
      clearInterval(keepAliveRef.current);
      keepAliveRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    if (!supported) return;
    cancelledRef.current = true;
    utterancesRef.current = [];
    clearKeepAlive();
    synth.cancel();
    if (activeId === id) setActive(null);
  }, [supported, synth, id, clearKeepAlive]);

  const speak = useCallback(
    (text) => {
      if (!supported || !text) return;

      synth.cancel();
      cancelledRef.current = false;

      const chunks = chunkForSpeech(text);
      if (!chunks.length) return;

      setActive(id);

      const finish = () => {
        clearKeepAlive();
        utterancesRef.current = [];
        if (activeId === id) setActive(null);
      };

      let completed = 0;
      const utterances = chunks.map((chunk) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        if (voiceRef.current) utterance.voice = voiceRef.current;
        utterance.lang = voiceRef.current?.lang ?? "en-US";
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => {
          completed += 1;
          if (completed >= chunks.length) finish();
        };
        utterance.onerror = (event) => {
          // A deliberate stop surfaces as an error too. Anything else: count it
          // as done so one bad chunk cannot strand the button in "Stop".
          if (cancelledRef.current || event?.error === "canceled" || event?.error === "interrupted") {
            return finish();
          }
          completed += 1;
          if (completed >= chunks.length) finish();
        };
        return utterance;
      });

      // Chrome garbage-collects utterances that nothing references, which cuts
      // speech off part-way. Holding them here keeps them alive until done.
      utterancesRef.current = utterances;

      // Queue every chunk at once. Relying on each onend to trigger the next is
      // fragile — if one event is dropped the rest never plays. The browser's
      // own queue does not have that problem.
      utterances.forEach((utterance) => synth.speak(utterance));

      // Chrome's synthesiser also goes idle on long passages; resume() is a
      // no-op when it is not paused, so this is safe to call repeatedly.
      clearKeepAlive();
      keepAliveRef.current = setInterval(() => {
        if (cancelledRef.current || !synth.speaking) return;
        synth.resume();
      }, 5000);
    },
    [supported, synth, id, clearKeepAlive]
  );

  useEffect(() => {
    if (!supported) return;
    const onHide = () => stop();
    window.addEventListener("pagehide", onHide);
    return () => {
      window.removeEventListener("pagehide", onHide);
      clearKeepAlive();
      synth.cancel();
    };
  }, [supported, stop, synth, clearKeepAlive]);

  return { supported, speaking, speak, stop };
}
