## 2026-01-14 - Keyboard Accessibility for Clickable Cards

**Learning:** Clickable cards rendered as `<div>` elements with `onClick` lack native keyboard focus and activation support, making them completely hidden from keyboard-only and screen reader users unless explicitly configured with ARIA roles, tab indexes, keyboard listeners, and focus rings.

**Action:** Whenever creating or refactoring interactive card components, always include `role="button"`, `tabIndex={0}`, `aria-label`, `onKeyDown` (handling `Enter` and `Space`), and `focus-visible:ring-2` focus indicators.
