## 2026-10-13 - Semantic Button Elements for Interactive Cards

**Learning:** Clickable cards built using `div` with `onClick` are inaccessible to keyboard and screen reader users because `div` elements cannot receive focus or respond to standard keyboard activation (Space/Enter).

**Action:** Always wrap interactive card components in semantic `<button type="button">` (or `<a>` if navigating via link) with `focus-visible` ring utilities (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`) and group-focus classes for child elements.
