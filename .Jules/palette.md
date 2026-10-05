## 2026-10-05 - Interactive Card Accessibility Pattern
**Learning:** In React SPA law directory interfaces, interactive card elements represented as `div` elements with `onClick` are skipped by keyboard tabbing and unannounced to screen readers.
**Action:** Always render clickable card elements as semantic `<button type="button">` with `focus-visible` ring styles (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`) and `group-focus-visible` child state transformations.
