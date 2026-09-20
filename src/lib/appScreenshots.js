// Play Store marketing screenshots, resolved at build time and grouped by app slug.
const files = import.meta.glob("../assets/apps/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

/** { thristo: [url, ...], partner: [url, ...] } — sorted by filename. */
export const appScreenshots = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .reduce((acc, [path, url]) => {
    const slug = path.split("/").pop().replace(/-\d+\.jpg$/, "");
    (acc[slug] ||= []).push(url);
    return acc;
  }, {});
