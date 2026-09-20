/**
 * Cursor-following spotlight for cards.
 *
 * Writes the pointer position straight to CSS custom properties rather than
 * React state, so moving the mouse never triggers a re-render. Pair the returned
 * handler with the `.spotlight` class (see index.css).
 */
export function useSpotlight() {
  const onPointerMove = (event) => {
    // Coarse pointers (touch) have no hover, so there is nothing to track.
    if (event.pointerType === "touch") return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return { onPointerMove };
}
