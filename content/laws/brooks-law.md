---
id: brooks-law
title: "Brooks' Law"
name: "Brooks' Law"
icon: group_add
summary: Adding manpower to a late software project makes it later.
category: first-way
axiom: "Adding manpower to a late software project makes it later."
pathology: "Management attempts to recover a delayed schedule by throwing more people at the problem, which increases communication overhead and diverts experienced engineers into onboarding."
defenseScript:
  executive: "Adding new headcount right now will slow us down further due to onboarding overhead and communication complexity. To hit our deadline, we should reduce scope or protect the team from distractions instead."
  team: "Protect core focus by streamlining documentation for newcomers while resisting scope creep under pressure."
balancingLaw:
  id: "galls-law"
  name: "Gall's Law"
  relationshipNote: "Rather than adding people to a complex failing system, simplify to a working baseline first."
tags:
  - "delivery-delays"
  - "org-friction"
retroPrompt: "Where in our current release pipeline are we adding people or process to solve a delay instead of simplifying the scope or work?"
origin:
  author: Frederick P. Brooks Jr.
  context: '"The Mythical Man-Month" (1975).'
  quote: The bearing of a child takes nine months, no matter how many women are assigned.
takeaways:
  - title: Ramp-up Time
    content: New team members need time to learn the project structure, goals, and codebase, consuming time from existing members who must mentor them.
  - title: Communication Overhead
    content: "As the number of people on a team increases, the number of communication channels increases combinatorially (n(n-1)/2), leading to more meetings and coordination effort."
  - title: Task Divisibility
    content: Not all tasks can be parallelized. Just because a woman can produce a baby in nine months doesn't mean nine women can produce a baby in one month.
relatedLaws: 
  - conways-law
  - galls-law
resources:
  - title: "The Mythical Man-Month"
    subtitle: "Essays on Software Engineering"
    type: "Book"
    url: "https://en.wikipedia.org/wiki/The_Mythical_Man-Month"
  - title: "Brooks's Law"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Brooks%27s_law"
---

Brooks's Law is a claim about software project management that states that adding more resources to a project that is running behind schedule will actually delay it further. This counter-intuitive principle highlights the complexities of communication and onboarding in collaborative knowledge work.
