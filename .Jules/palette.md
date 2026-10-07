## 2026-03-31 - Keyboard Accessibility for Card Components
**Learning:** In custom-routed React apps without standard link elements, card containers (`LawCard`, `RelatedLawRow`) rendered as `div` elements prevent keyboard users from focusing or interacting via Tab and Enter/Space keys.
**Action:** Always wrap interactive navigation cards in standard `<button type="button">` elements with `focus-visible:ring-2` and `group-focus-visible` styles to ensure equitable keyboard and screen reader accessibility.
