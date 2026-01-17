---
id: conways-law
name: Conway's Law
icon: hub
summary: Organizations design systems that mirror their communication structure.
category: second-way
origin:
  author: Melvin Conway
  context: '"How Do Committees Invent?" (1967).'
  quote: Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.
takeaways:
  - title: Inverse Conway Maneuver
    content: You can change your software structure by changing your team structure.
  - title: Team Boundaries
    content: API boundaries often reflect team boundaries. Ensure teams are aligned with desired architecture.
  - title: Loosely Coupled Architecture
    content: The book "Accelerate" suggests loosely coupled architectures enable teams to deploy independently, reducing communication overhead and coordination costs.
relatedLaws: 
  - brooks-law
resources:
  - title: "Conway's Law"
    subtitle: "MartinFowler.com"
    type: "Article"
    url: "https://martinfowler.com/bliki/ConwaysLaw.html"
  - title: "Accelerate"
    subtitle: "IT Revolution"
    type: "Book"
    url: "https://itrevolution.com/book/accelerate/"
---

Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.

As highlighted in the book **"Accelerate: The Science of Lean Software and DevOps"**, a loosely coupled architecture allows teams to work independently, significantly reducing the coordination and communication overhead required to deliver software. By aligning the architecture with the desired team structure (and vice versa), organizations can achieve higher delivery performance and stability.
