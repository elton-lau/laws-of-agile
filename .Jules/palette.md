## 2026-03-30 - Interactive Card Accessibility in Grid Layouts
**Learning:** Interactive cards built as `<div>` elements with `onClick` handlers are invisible to screen readers and inaccessible via keyboard navigation. Wrapping card contents in `<button type="button">` with `w-full` maintains grid styling while providing native keyboard navigation (Tab/Enter/Space) and focus indicators.
**Action:** Always use `<button>` or `<a>` with `focus-visible` styling for clickable cards and interactive grid items.
