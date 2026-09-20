// Resolved at build time. Drop a photo at src/assets/profile.(jpg|jpeg|png|webp)
// and every avatar on the site picks it up; until then callers fall back to the
// "NM" monogram.
const found = import.meta.glob("../assets/profile.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export const profilePhoto = Object.values(found)[0] ?? null;
