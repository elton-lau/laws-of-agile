## 2026-03-31 - Keyboard Accessibility on Clickable Cards
**Learning:** In custom context-routed React apps without standard link elements (`<a href>`), card components implemented as `<div>`s with `onClick` handlers prevent keyboard navigation (Tab key) and screen reader role identification.
**Action:** Convert clickable card components to semantic `<button type="button">` elements with explicit `focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none` styling and `w-full text-left/text-center font-normal`.
