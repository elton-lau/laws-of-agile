## 2026-03-31 - Semantic Interactive Cards & Focus Styles
**Learning:** Interactive cards or header branding elements rendered as `div` with `onClick` are invisible to keyboard navigation (Tab key) and screen readers.
**Action:** Always render clickable card and header components as semantic `<button type="button">` with `focus-visible` focus ring styles (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`).
