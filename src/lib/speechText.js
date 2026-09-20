/**
 * Text preparation for speech synthesis.
 *
 * Kept separate from the hook so the tricky parts — abbreviation handling and
 * sentence splitting — are pure functions that can be reasoned about directly.
 */

// Said aloud, these read badly or break sentence detection. Order matters:
// longer patterns first so they are not partially consumed by shorter ones.
const SPOKEN_FORMS = [
  [/\bB\.?\s?Tech\b/gi, "Bachelor of Technology"],
  [/\bNext\.js\b/gi, "Next J S"],
  [/\bNode\.js\b/gi, "Node J S"],
  [/\bReact\.js\b/gi, "React J S"],
  [/\bExpress\.js\b/gi, "Express J S"],
  [/\bVue\.js\b/gi, "Vue J S"],
  [/\bJava\s+SE\s+(\d+)/gi, "Java S E $1"],
  [/\bML\s?Kit\b/g, "M L Kit"],
  [/\bUI\/UX\b/gi, "U I, U X"],
  [/\bAPIs\b/g, "A P Is"],
  [/\bAPI\b/g, "A P I"],
  [/\bERP\b/g, "E R P"],
  [/\bCGPA\b/g, "C G P A"],
  [/\bCNN\b/g, "C N N"],
  [/\bAI\b/g, "A I"],
  [/\bMERN\b/g, "MURN"],          // otherwise spelled out letter by letter
  [/\bKEC\b/g, "K E C"],
  [/~\s?(\d)/g, "approximately $1"],
  [/&/g, " and "],
  [/\s*—\s*/g, ", "],             // em dash reads as a hard stop otherwise
];

/** Rewrites display text into something that sounds right when spoken. */
export function prepareForSpeech(text) {
  if (!text) return "";
  let out = String(text);
  for (const [pattern, replacement] of SPOKEN_FORMS) out = out.replace(pattern, replacement);
  return out.replace(/\s+/g, " ").trim();
}

/**
 * Splits prepared text into utterance-sized chunks.
 *
 * Chrome stops speaking after roughly 15 seconds, so text cannot go out in one
 * utterance — but splitting on every period shatters abbreviations into
 * fragments and leaves audible gaps. So: split on real sentence boundaries only
 * (terminator + space + capital), then merge neighbours back up to `maxChars`
 * so there are as few joins as possible.
 */
// ~170 characters is roughly 13 seconds of speech, comfortably inside Chrome's
// ~15 second cutoff while keeping joins infrequent enough to sound continuous.
export function chunkForSpeech(text, maxChars = 170) {
  const prepared = prepareForSpeech(text);
  if (!prepared) return [];

  // A boundary is a terminator followed by whitespace and a capital/digit,
  // where the terminator is not closing a single-letter abbreviation.
  const sentences = prepared
    .split(/(?<![A-Z])([.!?])\s+(?=[A-Z0-9])/g)
    .reduce((acc, part) => {
      if (/^[.!?]$/.test(part)) acc[acc.length - 1] += part;
      else acc.push(part);
      return acc;
    }, [])
    .map((s) => s.trim())
    .filter(Boolean);

  // A single sentence can still be long enough to hit Chrome's cutoff, so break
  // oversized ones at clause boundaries before merging.
  const units = sentences.flatMap((sentence) =>
    sentence.length <= maxChars ? [sentence] : splitAtClauses(sentence, maxChars)
  );

  const chunks = [];
  for (const unit of units) {
    const last = chunks[chunks.length - 1];
    if (last && last.length + unit.length + 1 <= maxChars) {
      chunks[chunks.length - 1] = `${last} ${unit}`;
    } else {
      chunks.push(unit);
    }
  }
  return chunks;
}

/** Breaks an over-long sentence on commas/semicolons, keeping the punctuation. */
function splitAtClauses(sentence, maxChars) {
  const pieces = sentence.split(/(?<=[,;:])\s+/);
  const out = [];
  for (const piece of pieces) {
    const last = out[out.length - 1];
    if (last && last.length + piece.length + 1 <= maxChars) {
      out[out.length - 1] = `${last} ${piece}`;
    } else {
      out.push(piece);
    }
  }
  return out;
}

/** Ranks available voices, best first. Neural/natural voices win. */
export function pickVoice(voices = []) {
  if (!voices.length) return null;
  const english = voices.filter((v) => v.lang?.toLowerCase().startsWith("en"));
  const pool = english.length ? english : voices;

  const score = (v) => {
    const name = v.name ?? "";
    let n = 0;
    if (/natural|neural/i.test(name)) n += 100;   // Edge/Windows neural voices
    if (/google/i.test(name)) n += 60;            // Chrome's remote voices
    if (v.localService === false) n += 25;        // remote usually means better
    if (/\b(en-US|en-GB|en-IN)\b/i.test(v.lang ?? "")) n += 10;
    if (/david|zira|mark|hazel/i.test(name)) n -= 30; // legacy robotic SAPI voices
    return n;
  };

  return [...pool].sort((a, b) => score(b) - score(a))[0];
}
