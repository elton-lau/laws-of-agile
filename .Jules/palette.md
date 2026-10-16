## 2026-03-30 - Interactive Card Accessibility

**Learning:** Interactive card components (`LawCard` and `RelatedLawRow`) implemented using `<div onClick>` prevent keyboard navigation (Tab/Enter/Space) and are invisible as actionables to screen readers.
**Action:** Always render interactive card components as `<button type="button">` with descriptive `aria-label` attributes and focus visible styles (`focus-visible:ring-2 focus-visible:ring-primary`) to maintain visual layout while providing native accessibility.
