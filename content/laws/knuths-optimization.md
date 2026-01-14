---
id: knuths-optimization
name: Knuth's Optimization
icon: speed
summary: Premature optimization is the root of all evil.
category: second-way
origin:
  author: Donald Knuth
  context: '"Structured Programming with go to Statements" (1974).'
  quote: "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil."
takeaways:
  - title: Feedback First
    content: Optimization requires a feedback loop (profiling). Optimizing without measurement is guessing.
  - title: 97% Rule
    content: Focus on the 3% of code that runs frequently (critical paths). Optimizing the other 97% is waste.
relatedLaws: 
  - pareto-principle
  - occams-razor
resources:
  - title: "Structured Programming with go to Statements"
    subtitle: "ACM Digital Library"
    type: "Paper"
    url: "https://dl.acm.org/doi/10.1145/356635.356640"
---

Donald Knuth's famous warning states that "premature optimization is the root of all evil." In software engineering, this serves as a reminder to prioritize readable, working code first, and only optimize performance when feedback (profiling data) identifies a proven bottleneck.
