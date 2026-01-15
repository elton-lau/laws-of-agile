---
id: galls-law
name: Gall's Law
icon: account_tree
summary: Complex systems that work invariably evolved from simple systems.
category: third-way
origin:
  author: John Gall
  context: '"Systemantics" (1975).'
  quote: A complex system designed from scratch never works and cannot be patched up to make it work.
takeaways:
  - title: MVP Approach
    content: Start small, validate, and iterate. Do not try to build the final complex system in one go.
  - title: Evolution
    content: Allow the system architecture to evolve based on real-world usage and feedback.
  - title: Strangler Fig Pattern
    content: When modernizing legacy systems, incrementally grow a new system around the old one rather than attempting a risky "big bang" rewrite. This pattern, named by Martin Fowler after the strangler fig tree, reduces risk by allowing each migration step to be validated independently.
relatedLaws: 
  - occams-razor
  - theory-of-constraints
resources:
  - title: "Systemantics"
    subtitle: "The Systems Bible"
    type: "Book"
    url: "https://www.amazon.com/Systemantics-Systems-Bible-John-Gall/dp/0961825170"
  - title: "Strangler Fig Application"
    subtitle: "MartinFowler.com"
    type: "Article"
    url: "https://martinfowler.com/bliki/StranglerFigApplication.html"
---

A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work.

This principle has profound implications for software modernization. The **Strangler Fig Pattern**, coined by Martin Fowler, applies Gall's Law to legacy system migrations. Just as a strangler fig vine gradually grows around a host tree until it can stand on its own, teams can incrementally build new functionality around legacy systems, progressively routing traffic to the new implementation until the old system can be safely retired.

This approach embraces the reality that working systems must evolve rather than be replaced wholesale—honoring both the complexity of existing systems and the need for continuous delivery of value during transformation.
