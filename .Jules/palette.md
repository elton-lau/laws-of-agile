## 2026-03-31 - Clickable Cards Accessibility
**Learning:** Interactive cards built using `div` elements with `onClick` handlers prevent keyboard-only users and screen-reader users from discovering, focusing, or navigating to main content cards.
**Action:** Always render interactive card components using native `<button type="button">` elements with full `focus-visible` ring indicators and clear `aria-label` attributes describing the action.
