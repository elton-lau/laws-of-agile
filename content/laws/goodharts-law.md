---
id: goodharts-law
title: "Goodhart's Law"
name: "Goodhart's Law"
icon: track_changes
summary: When a measure becomes a target, it ceases to be a good measure.
category: second-way
axiom: "When a measure becomes a target, it ceases to be a good measure."
pathology: "Teams optimize for artificial KPIs (e.g. story points closed, code coverage, lines of code) rather than actual business value, resulting in system gaming and distorted incentives."
defenseScript:
  executive: "Tying rewards directly to velocity or output metrics creates incentives to inflate estimates and sacrifice quality. We should evaluate outcomes and customer impact alongside health metrics."
  team: "Focus on delivering value and working software over artificially hitting metric targets."
balancingLaw:
  id: "pareto-principle"
  name: "Pareto Principle"
  relationshipNote: "Focus on measuring the 20% of high-leverage outcomes rather than micromanaging overall activity metrics."
tags:
  - "metric-gaming"
retroPrompt: "Are any of our team metrics or OKRs encouraging us to game the system rather than solve real user problems?"
origin:
  author: Charles Goodhart
  context: '"Problems of Monetary Management" (1975).'
  quote: Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes.
takeaways:
  - title: Gaming the System
    content: If you measure developers by lines of code, they will write verbose code.
  - title: Holistic Metrics
    content: Use a balanced set of metrics to prevent over-optimization of one at the expense of others.
  - title: "Gilb's Law (Counterpoint)"
    content: "\"Anything you need to quantify can be measured in some way that is superior to not measuring it at all.\" — Tom Gilb. Despite the risks of gaming, measurement remains valuable; the key is choosing the right metrics and interpreting them wisely."
relatedLaws: 
  - campbells-law
resources:
  - title: "Goodhart's Law"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Goodhart%27s_law"
---

Named after economist Charles Goodhart, this law suggests that once a specific metric is used as a goal or target, people will game the system to achieve that number, often at the expense of the actual quality or utility the metric was supposed to measure.
