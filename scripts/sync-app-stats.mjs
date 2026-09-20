/**
 * Refreshes store ratings into src/data/appStats.json.
 *
 *   iOS  - Apple's public iTunes lookup API (a real JSON endpoint).
 *   Play - parsed out of the listing HTML, since Google publishes no equivalent API.
 *
 * Uses plain fetch only, so it needs no browser engine and no extra dependency.
 * Run it manually with `npm run sync:apps`; it is deliberately NOT part of
 * `npm run build`, because a Google markup change must never break a deploy.
 * Anything that fails here keeps whatever the committed JSON already had.
 */
import { writeFileSync, readFileSync, existsSync } from "fs";

const OUT = "src/data/appStats.json";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const APPS = [
  { slug: "thristo", playId: "com.mycompany.thristoApp", appleId: "6742734112" },
  { slug: "partner", playId: "com.mycompany.storeappthristo", appleId: "6742093666" },
];

const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const result = { ...previous, checkedAt: new Date().toISOString().slice(0, 10) };
const keep = (slug, store) => previous[slug]?.[store] ?? null;

async function fetchApple(appleId) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${appleId}&country=in`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const app = (await res.json()).results?.[0];
  if (!app?.averageUserRating) return null;
  return {
    rating: app.averageUserRating.toFixed(1),
    ratings: String(app.userRatingCount ?? 0),
  };
}

async function fetchPlay(playId) {
  const res = await fetch(
    `https://play.google.com/store/apps/details?id=${playId}&hl=en_IN`,
    { headers: { "User-Agent": UA } }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();

  const first = (re) => (html.match(re) || [])[1] ?? null;
  const rating = first(/Rated ([\d.]+) stars out of five stars/);
  const reviews = first(/([\d.]+[KMB]?)\s*reviews/);
  // Rendered as a bare cell, e.g. <div class="ClM7O">1K+</div>
  const downloads = first(/>(\d+(?:\.\d+)?[KMB]?\+)</);

  return rating ? { rating, reviews, downloads } : null;
}

for (const app of APPS) {
  const entry = { ...(previous[app.slug] ?? {}) };

  for (const [store, run, describe] of [
    ["ios", () => fetchApple(app.appleId), (s) => `${s.rating}* / ${s.ratings} ratings`],
    ["play", () => fetchPlay(app.playId), (s) => `${s.rating}* / ${s.reviews} reviews / ${s.downloads}`],
  ]) {
    try {
      const stats = await run();
      // Merge rather than replace: a field that failed to parse this time keeps
      // whatever the committed JSON already had.
      entry[store] = stats
        ? Object.fromEntries(
            Object.entries({ ...(keep(app.slug, store) ?? {}), ...stats }).filter(
              ([, v]) => v != null
            )
          )
        : keep(app.slug, store);
      console.log(`  ${app.slug} ${store.padEnd(4)}: ${stats ? describe(stats) : "unparsed - kept previous"}`);
    } catch (err) {
      entry[store] = keep(app.slug, store);
      console.warn(`  ${app.slug} ${store.padEnd(4)}: failed (${err.message}) - kept previous`);
    }
  }

  result[app.slug] = entry;
}

writeFileSync(OUT, JSON.stringify(result, null, 2) + "\n");
console.log(`\nWrote ${OUT} (checkedAt ${result.checkedAt})`);
