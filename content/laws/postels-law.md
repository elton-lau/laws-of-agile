---
id: postels-law
name: Postel's Law
icon: input_circle
summary: Be conservative in what you do, be liberal in what you accept.
category: second-way
origin:
  author: Jon Postel
  context: TCP specification (RFC 793, 1981).
  quote: TCP implementations should follow a general principle of robustness; be conservative in what you do, be liberal in what you accept from others.
takeaways:
  - title: Input Validation
    content: Accept malformed input if the intent is clear (within reason), but always produce strictly valid output.
  - title: Resilience
    content: Systems should be able to handle unexpected variations in input without crashing.
relatedLaws: 
  - hyrums-law
resources:
  - title: "Robustness Principle"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Robustness_principle"
---

Also known as the Robustness Principle, it was formulated by Jon Postel, an early pioneer of the Internet. It applies to protocol design and API consumption.
