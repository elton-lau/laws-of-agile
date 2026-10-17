---
id: conways-law
title: "Conway's Law"
name: "Conway's Law"
icon: hub
summary: Organizations design systems that mirror their communication structure.
category: second-way
axiom: "Organizations design systems that mirror their communication structure."
pathology: "Siloed team structures cause fragmented, coupled architectures and cross-team friction, leading to codebase decay and slow delivery."
defenseScript:
  executive: "If we want a modular, decoupled architecture, we must first structure our teams in stream-aligned, autonomous units rather than functional silos."
  team: "Architectural boundaries should mirror domain and team ownership to minimize handoffs and friction."
balancingLaw:
  id: "brooks-law"
  name: "Brooks' Law"
  relationshipNote: "Reorganizing teams dynamically must account for communication overhead and onboarding delays."
tags:
  - "org-friction"
  - "codebase-rot"
retroPrompt: "Which cross-team dependencies or handoffs slowed down our releases in the past sprint?"
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
