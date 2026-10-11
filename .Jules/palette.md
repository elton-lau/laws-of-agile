## 2026-03-30 - Interactive Card Accessibility in Tailwind / React
**Learning:** Interactive card components that navigate or trigger actions (`LawCard`, `RelatedLawRow`) should be rendered as native `<button type="button">` or `<a>` elements with `w-full text-left` and `focus-visible` styling rather than clickable `<div>`s to ensure keyboard navigation and screen reader support.
**Action:** Always check interactive cards in this design system and wrap them in semantic button/link tags with focus indicators (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`).
