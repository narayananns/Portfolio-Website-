import { Volume2 } from "lucide-react";
import { useSpeech } from "../hooks/useSpeech";

/**
 * Reads a passage aloud using the browser's speech synthesis.
 * Renders nothing when the browser has no support, so there is never a dead control.
 */
export default function ListenButton({ text, label = "Listen", size = "sm" }) {
  const { supported, speaking, speak, stop } = useSpeech();

  if (!supported) return null;

  const sizing =
    size === "md" ? "gap-2.5 px-4 py-2 text-sm" : "gap-2 px-3 py-1.5 text-xs";
  const iconSize = size === "md" ? 16 : 14;

  return (
    <button
      type="button"
      onClick={() => (speaking ? stop() : speak(text))}
      aria-pressed={speaking}
      aria-label={speaking ? "Stop reading this section aloud" : "Listen to this section read aloud"}
      title={speaking ? "Stop" : "Listen"}
      className={`group inline-flex shrink-0 items-center rounded-full border font-semibold transition-all ${sizing} ${
        speaking
          ? "border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400"
          : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400"
      }`}
    >
      {speaking ? (
        <>
          {/* Simple equaliser so it is obvious something is playing */}
          <span aria-hidden="true" className="flex h-3 items-end gap-[2px]">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                style={{ animationDelay: `${delay}ms` }}
                className="w-[2px] animate-equalise rounded-full bg-current"
              />
            ))}
          </span>
          Stop
        </>
      ) : (
        <>
          <Volume2 size={iconSize} className="transition-transform group-hover:scale-110" />
          {label}
        </>
      )}
    </button>
  );
}
