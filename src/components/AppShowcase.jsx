import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { appScreenshots } from "../lib/appScreenshots";

/**
 * Tabbed gallery of Play Store screenshots for the apps shipped in a role.
 * These are the store's own marketing graphics, so they are shown as-is rather
 * than inside a phone frame — they already contain device mockups.
 */
export default function AppShowcase({ apps }) {
  const withShots = apps.filter((app) => appScreenshots[app.slug]?.length);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const app = withShots[active];
  const shots = app ? appScreenshots[app.slug] : [];

  const step = (delta) =>
    setLightbox((i) => (i === null ? i : (i + delta + shots.length) % shots.length));

  // Keyboard control while the lightbox is open, and lock the page behind it.
  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % shots.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + shots.length) % shots.length);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, shots.length]);

  if (!withShots.length) return null;

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Screens from the store
        </p>

        {withShots.length > 1 && (
          <div
            role="tablist"
            aria-label="Choose an app"
            className="flex gap-1 rounded-full bg-slate-100 dark:bg-slate-800 p-1"
          >
            {withShots.map((item, index) => (
              <button
                key={item.slug}
                role="tab"
                aria-selected={active === index}
                onClick={() => setActive(index)}
                className={`relative rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  active === index
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {active === index && (
                  <motion.span
                    layoutId="app-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-accent-600"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Horizontal strip; scrolls on touch, snaps to each shot */}
      <ul className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory -mx-1 px-1">
        {shots.map((src, index) => (
          <li key={src} className="snap-start shrink-0">
            <button
              onClick={() => setLightbox(index)}
              aria-label={`Open ${app.name} screenshot ${index + 1} of ${shots.length}`}
              className="group block overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 transition-all hover:border-brand-400 dark:hover:border-brand-600 hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={src}
                alt={`${app.name} screenshot ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-52 w-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${app.name} screenshots`}
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/90 backdrop-blur-sm p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            {shots.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  aria-label="Previous screenshot"
                  className="absolute left-3 sm:left-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  aria-label="Next screenshot"
                  className="absolute right-3 sm:right-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <motion.img
              key={shots[lightbox]}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              src={shots[lightbox]}
              alt={`${app.name} screenshot ${lightbox + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] w-auto rounded-2xl shadow-lift"
            />

            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-5 flex items-center gap-4 text-sm text-white/80"
            >
              <span>
                {app.name} &middot; {lightbox + 1} / {shots.length}
              </span>
              <a
                href={app.play}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-white hover:underline underline-offset-4"
              >
                View on Google Play
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
