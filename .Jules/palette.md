## 2026-01-14 - Interactive Card Accessibility Pattern
**Learning:** Interactive cards rendered as `<div>` tags in Laws of Agile lacked keyboard focus (`tabIndex`), keypress event handlers (`Enter`/`Space`), and ARIA attributes, preventing keyboard and screen reader accessibility.
**Action:** When creating or editing clickable card components (`LawCard`, `RelatedLawRow`), assign `role="button"`, `tabIndex={0}`, `onKeyDown` (Enter/Space), descriptive `aria-label`, and `focus-visible:ring-2 focus-visible:ring-primary` for visible focus indicators.
