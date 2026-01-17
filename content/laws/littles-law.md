---
id: littles-law
name: Little's Law
icon: timeline
summary: The average number of items in a system equals the average arrival rate multiplied by the average time in the system.
category: first-way
origin:
  author: John Little
  context: Proof published in 1961, based on 1954 observations.
  quote: L = λW
takeaways:
  - title: WIP Limits
    content: To reduce lead time (W), you must reduce Work In Progress (L) or increase throughput (λ).
  - title: Predictability
    content: Stable systems are more predictable. Variability in arrival or processing times disrupts the flow.
  - title: Utilization vs. Wait Time
    content: As resource utilization approaches 100%, wait times increase exponentially (Kingman's Formula). Slack is necessary for flow.
relatedLaws: 
  - theory-of-constraints
  - brooks-law
resources:
  - title: "Little's Law"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Little%27s_law"
  - title: "Kanban"
    subtitle: "Successful Evolutionary Change for Your Technology Business"
    type: "Book"
    url: "https://www.amazon.com/Kanban-Successful-Evolutionary-Technology-Business/dp/0984521402"
  - title: "The DevOps Handbook"
    subtitle: "IT Revolution"
    type: "Book"
    url: "https://itrevolution.com/book/the-devops-handbook/"
---

Little's Law is a theorem by John Little which states that the long-term average number of customers in a stationary system is equal to the long-term average effective arrival rate multiplied by the average time that a customer spends in the system.

In software delivery, this means that to finish work faster (reduce Lead Time), you must either work faster (increase Throughput) or—more realistically—do fewer things at once (reduce WIP). This counters the intuition that "keeping everyone busy" (100% utilization) is efficient; in reality, high utilization without slack creates gridlock.
