// Author: Senior Frontend Engineer
// OS support: Mac/Linux/Windows
// Description: Collection of laws in markdown format

export const lawsContent = [
  // First Way
  `---
id: conways-law
name: Conway's Law
icon: hub
summary: Organizations design systems that mirror their communication structure.
category: first-way
origin:
  author: Melvin Conway
  context: '"How Do Committees Invent?" (1967).'
  quote: Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.
takeaways:
  - title: Inverse Conway Maneuver
    content: You can change your software structure by changing your team structure.
  - title: Team Boundaries
    content: API boundaries often reflect team boundaries. Ensure teams are aligned with desired architecture.
relatedLaws: 
  - brooks-law
resources:
  - title: "Conway's Law"
    subtitle: "MartinFowler.com"
    type: "Article"
    url: "https://martinfowler.com/bliki/ConwaysLaw.html"
---

Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.`,

  `---
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
---

Little's Law is a theorem by John Little which states that the long-term average number of customers in a stationary system is equal to the long-term average effective arrival rate multiplied by the average time that a customer spends in the system.`,

  `---
id: theory-of-constraints
name: Theory of Constraints
icon: hourglass_disabled
summary: A chain is no stronger than its weakest link; optimize the bottleneck.
category: first-way
origin:
  author: Eliyahu M. Goldratt
  context: '"The Goal" (1984).'
  quote: Any improvement made anywhere besides the bottleneck is an illusion.
takeaways:
  - title: Identify the Constraint
    content: Find the single part of the process that limits the rate of the entire system.
  - title: Exploit the Constraint
    content: Ensure the bottleneck is always working at full capacity on the highest priority items.
relatedLaws: 
  - littles-law
  - pareto-principle
resources:
  - title: "The Goal"
    subtitle: "A Process of Ongoing Improvement"
    type: "Book"
    url: "https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884271951"
  - title: "Theory of Constraints"
    subtitle: "Lean Production"
    type: "Article"
    url: "https://www.leanproduction.com/theory-of-constraints/"
---

The Theory of Constraints is a methodology for identifying the most important limiting factor (i.e. constraint) that stands in the way of achieving a goal and then systematically improving that constraint until it is no longer the limiting factor.`,

  `---
id: parkinsons-law
name: Parkinson's Law
icon: schedule
summary: Work expands so as to fill the time available for its completion.
category: first-way
origin:
  author: Cyril Northcote Parkinson
  context: '"Parkinson''s Law", The Economist (1955).'
  quote: Work expands so as to fill the time available for its completion.
takeaways:
  - title: Timeboxing
    content: Set strict time limits for tasks to prevent scope creep and ensure focus.
  - title: Deadlines
    content: Artificial deadlines can be effective in forcing prioritization and decision-making.
relatedLaws: 
  - hofstadters-law
  - littles-law
resources:
  - title: "Parkinson's Law"
    subtitle: "The Economist"
    type: "Article"
    url: "https://www.economist.com/news/1955/11/19/parkinsons-law"
---

Parkinson's Law states that work expands to fill the time available for its completion. This adage highlights the inefficiency of bureaucracy and the tendency for tasks to become more complex and time-consuming than necessary when no strict time limits are imposed.`,

  `---
id: brooks-law
name: Brooks's Law
icon: group_add
summary: Adding manpower to a late software project makes it later.
category: first-way
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
  - gall-law
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

Brooks's Law is a claim about software project management that states that adding more resources to a project that is running behind schedule will actually delay it further. This counter-intuitive principle highlights the complexities of communication and onboarding in collaborative knowledge work.`,

  `---
id: hackmans-law
name: Hackman's Law
icon: groups
summary: The larger a group, the less effective it becomes.
category: first-way
origin:
  author: J. Richard Hackman
  context: Organizational psychology research at Harvard.
  quote: My rule of thumb is no double digits.
takeaways:
  - title: Cognitive Load
    content: Large teams increase cognitive load due to the number of communication paths required to stay in sync.
  - title: Social Loafing
    content: In larger groups, individuals often exert less effort than they would alone, a phenomenon known as social loafing.
relatedLaws: 
  - brooks-law
  - conways-law
resources:
  - title: "Leading Teams"
    subtitle: "Harvard Business Review"
    type: "Book"
    url: "https://hbr.org/2009/05/why-teams-dont-work"
---

Hackman's Law suggests that the effectiveness of a team is inversely proportional to its size. As a group grows, the overhead of communication and coordination grows exponentially, while the vulnerability to "social loafing" increases. J. Richard Hackman, a pioneer in organizational behavior, famously stated that big teams usually end up wasting time on politics and waiting for others.`,

  `---
id: larmans-laws
name: Larman's Laws
icon: domain
summary: Organizations are implicitly optimized to avoid changing the status quo.
category: first-way
origin:
  author: Craig Larman
  context: '"Larman''s Laws of Organizational Behavior" (c. 2005).'
  quote: Culture follows structure.
takeaways:
  - title: Culture Follows Structure
    content: You cannot meaningfully change culture by just asking people to change behavior; you must change the organizational system and structure first.
  - title: Status Quo Bias
    content: Organizations are optimized to preserve existing power structures, often redefining new terms to match old ways of working.
relatedLaws: 
  - conways-law
  - galls-law
resources:
  - title: "Larman's Laws"
    subtitle: "Craig Larman Wiki"
    type: "Article"
    url: "https://www.craiglarman.com/wiki/index.php?title=Larman%27s_Laws_of_Organizational_Behavior"
---

Larman's Laws of Organizational Behavior describe the friction encountered when attempting to change complex organizations. The most critical insight is that "Culture follows structure"—meaning that organizational design (roles, responsibilities, hierarchy) dictates the culture, not the other way around.`,

  // Second Way
  `---
id: murphys-law
name: Murphy's Law
icon: warning
summary: Anything that can go wrong will go wrong.
category: second-way
origin:
  author: Edward A. Murphy Jr.
  context: Aerospace engineering tests (1949).
  quote: If there's more than one way to do a job, and one of those ways will result in disaster, then somebody will do it that way.
takeaways:
  - title: Defensive Programming
    content: Assume systems will fail and build resilience and recovery mechanisms.
  - title: Chaos Engineering
    content: Proactively inject failures to test the system's ability to withstand turbulent conditions.
relatedLaws: 
  - linus-law
resources:
  - title: "Murphy's Law"
    subtitle: "Britannica"
    type: "Article"
    url: "https://www.britannica.com/topic/Murphys-Law"
---

An adage that is typically stated as: 'Anything that can go wrong will go wrong.' In engineering, it serves as a reminder to design for failure scenarios.`,

  `---
id: goodharts-law
name: Goodhart's Law
icon: track_changes
summary: When a measure becomes a target, it ceases to be a good measure.
category: second-way
origin:
  author: Charles Goodhart
  context: '"Problems of Monetary Management" (1975).'
  quote: Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes.
takeaways:
  - title: Gaming the System
    content: If you measure developers by lines of code, they will write verbose code.
  - title: Holistic Metrics
    content: Use a balanced set of metrics to prevent over-optimization of one at the expense of others.
relatedLaws: 
  - campbells-law
resources:
  - title: "Goodhart's Law"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Goodhart%27s_law"
---

Named after economist Charles Goodhart, this law suggests that once a specific metric is used as a goal or target, people will game the system to achieve that number, often at the expense of the actual quality or utility the metric was supposed to measure.`,

  `---
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

Donald Knuth's famous warning states that "premature optimization is the root of all evil." In software engineering, this serves as a reminder to prioritize readable, working code first, and only optimize performance when feedback (profiling data) identifies a proven bottleneck.`,

  `---
id: linus-law
name: Linus's Law
icon: visibility
summary: Given enough eyeballs, all bugs are shallow.
category: second-way
origin:
  author: Eric S. Raymond
  context: '"The Cathedral and the Bazaar" (1997 essay).'
  quote: Given enough eyeballs, all bugs are shallow.
takeaways:
  - title: Code Reviews
    content: More reviewers generally lead to higher quality code and fewer defects.
  - title: Open Source
    content: Public scrutiny is a powerful tool for security and reliability.
relatedLaws: 
  - murphys-law
resources:
  - title: "The Cathedral and the Bazaar"
    subtitle: "O'Reilly Media"
    type: "Book"
    url: "http://www.catb.org/~esr/writings/cathedral-bazaar/"
---

Formulated by Eric S. Raymond regarding the Linux kernel development, it states that if there are enough beta testers and co-developers, almost every problem will be characterized quickly and the fix obvious to someone.`,

  `---
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

Also known as the Robustness Principle, it was formulated by Jon Postel, an early pioneer of the Internet. It applies to protocol design and API consumption.`,

  `---
id: law-of-propinquity
name: Law of Propinquity
icon: person_pin_circle
summary: The likelihood of communication between two people decreases as the physical distance between them increases.
category: second-way
origin:
  author: Thomas J. Allen
  context: '"Managing the Flow of Technology" (1977).'
  quote: We are more likely to communicate with people who are physically close to us.
takeaways:
  - title: The Allen Curve
    content: Communication frequency drops exponentially with distance. 50 meters of separation is often equivalent to being in different buildings.
  - title: Remote Equivalence
    content: In distributed teams, "distance" is measured in time zones and friction to connect. Reduce friction to increase "virtual propinquity".
relatedLaws: 
  - conways-law
  - hackmans-law
resources:
  - title: "The Allen Curve"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Allen_curve"
  - title: "Managing the Flow of Technology"
    subtitle: "MIT Press"
    type: "Book"
    url: "https://mitpress.mit.edu/9780262510271/managing-the-flow-of-technology/"
---

The Law of Propinquity, often visualized as the Allen Curve, states that there is a strong negative correlation between physical distance and the frequency of communication between engineers. It suggests that high-bandwidth communication—critical for complex problem solving—relies heavily on physical proximity or very low-friction virtual alternatives.`,

  `---
id: humphreys-law
name: Humphrey's Law
icon: touch_app
summary: Users do not know what they want until they see working software.
category: second-way
origin:
  author: Watts S. Humphrey
  context: Requirements Engineering observations.
  quote: It is a fundamental fact of software development that users do not know what they want until they see it.
takeaways:
  - title: Requirements Discovery
    content: Requirements cannot be fully known upfront; they emerge through interaction with the system.
  - title: Prototyping
    content: Build prototypes and MVPs to elicit feedback rather than relying on abstract specifications.
relatedLaws: 
  - galls-law
  - linus-law
resources:
  - title: "Watts Humphrey"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Watts_Humphrey"
---

Humphrey's Law captures the inherent difficulty in gathering software requirements. Because software is abstract, users struggle to articulate their needs until they have a tangible artifact to interact with. This principle underscores the importance of iterative development and rapid prototyping over comprehensive upfront planning.`,

  `---
id: dudes-law
name: Dude's Law
icon: functions
summary: Value = Why / How.
category: second-way
origin:
  author: David Hussman
  context: Agile product development coaching.
  quote: Value = Why / How.
takeaways:
  - title: The Value Equation
    content: Value is the ratio of the "Why" (impact/need) to the "How" (complexity/cost).
  - title: Maximize Value
    content: You can increase value by solving more important problems or by simplifying the solution.
relatedLaws: 
  - occams-razor
  - pareto-principle
resources:
  - title: "Dude's Law"
    subtitle: "MartinFowler.com"
    type: "Article"
    url: "https://martinfowler.com/bliki/DudesLaw.html"
---

Dude's Law, formulated by David Hussman, is a simple yet powerful formula: Value = Why / How. It serves as a reminder to prioritize value (the "Why") over complexity (the "How"). A high "Why" implemented with a complex "How" yields less value than the same "Why" achieved with a simple "How".`,

  // Third Way
  `---
id: pareto-principle
name: Pareto Principle
icon: pie_chart
summary: Roughly 80% of the effects come from 20% of the causes.
category: third-way
origin:
  author: Vilfredo Pareto
  context: '"Cours d''économie politique" (1896).'
  quote: 80% of land in Italy was owned by 20% of the population.
takeaways:
  - title: Prioritization
    content: Focus on the 20% of features that deliver 80% of the value.
  - title: Bug Fixing
    content: Fixing the top 20% of reported bugs often resolves 80% of user errors and crashes.
relatedLaws: 
  - theory-of-constraints
resources:
  - title: "Pareto Principle"
    subtitle: "Investopedia"
    type: "Article"
    url: "https://www.investopedia.com/terms/p/paretoprinciple.asp"
---

Also known as the 80/20 rule, the law of the vital few, or the principle of factor sparsity. It states that for many events, roughly 80% of the effects come from 20% of the causes.`,

  `---
id: occams-razor
name: Occam's Razor
icon: content_cut
summary: Entities should not be multiplied without necessity.
category: third-way
origin:
  author: William of Ockham
  context: 14th Century scholastic philosophy.
  quote: Pluralitas non est ponenda sine necessitate.
takeaways:
  - title: Simplicity
    content: Avoid over-engineering. Choose the simplest solution that satisfies the requirements.
  - title: YAGNI
    content: You Aren't Gonna Need It - don't build features for hypothetical future use cases.
relatedLaws: 
  - galls-law
resources:
  - title: "Occam's Razor"
    subtitle: "Stanford Encyclopedia of Philosophy"
    type: "Article"
    url: "https://plato.stanford.edu/entries/ockham/"
---

A problem-solving principle that suggests that the simplest explanation is usually the best one. In engineering, it advocates for simplicity in design.`,

  `---
id: hofstadters-law
name: Hofstadter's Law
icon: history
summary: It always takes longer than you expect, even when you take into account Hofstadter's Law.
category: third-way
origin:
  author: Douglas Hofstadter
  context: '"Gödel, Escher, Bach" (1979).'
  quote: It always takes longer than you expect, even when you take into account Hofstadter's Law.
takeaways:
  - title: Estimation Buffers
    content: Always add buffers to estimates, but realize even those buffers might be consumed.
  - title: Uncertainty
    content: Acknowledge that unknown unknowns will arise during development.
relatedLaws: 
  - brooks-law
resources:
  - title: "Gödel, Escher, Bach"
    subtitle: "An Eternal Golden Braid"
    type: "Book"
    url: "https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach"
---

A recursive self-referencing law that describes the difficulty of accurately estimating the time it will take to complete a task of substantial complexity.`,

  `---
id: maslows-hammer
name: Maslow's Hammer
icon: construction
summary: If the only tool you have is a hammer, it is tempting to treat everything as if it were a nail.
category: third-way
origin:
  author: Abraham Maslow
  context: '"The Psychology of Science" (1966).'
  quote: I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail.
takeaways:
  - title: The Golden Hammer
    content: Avoid over-reliance on familiar tools. Just because you know a specific framework doesn't mean it is the right solution for every problem.
  - title: Cognitive Bias
    content: Be aware of how your expertise shapes your perception of a problem. Approach new challenges with an open mind.
relatedLaws: 
  - occams-razor
resources:
  - title: "Law of the instrument"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Law_of_the_instrument"
---

Maslow's Hammer, also known as the Law of the Instrument, describes a cognitive bias that involves an over-reliance on a familiar tool. This concept is famously summarized by the observation: "If the only tool you have is a hammer, it is tempting to treat everything as if it were a nail."`,

  `---
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
relatedLaws: 
  - occams-razor
resources:
  - title: "Systemantics"
    subtitle: "The Systems Bible"
    type: "Book"
    url: "https://www.amazon.com/Systemantics-Systems-Bible-John-Gall/dp/0961825170"
---

A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work.`
];
// --- End of content/laws.ts ---