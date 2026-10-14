## 2026-03-30 - Keyboard Accessibility for Custom Clickable Cards
**Learning:** Custom interactive elements (e.g., `<div>` cards with click handlers) are inaccessible to keyboard and screen reader users unless explicitly configured with interactive roles, focusability, keyboard event handlers, and visible focus rings.
**Action:** Always complement `onClick` handlers on non-native button elements with `role="button"`, `tabIndex={0}`, `aria-label`, an `onKeyDown` handler listening for `Enter` and `Space`, and `focus-visible:ring-2` styling.
