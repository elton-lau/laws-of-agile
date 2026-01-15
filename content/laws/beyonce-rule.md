---
id: beyonce-rule
name: The Beyoncé Rule
icon: verified
summary: If you liked it, you should have put a CI test on it.
category: second-way
origin:
  author: Google Engineering
  context: '"Software Engineering at Google" (2020).'
  quote: If a product experiences outages or other problems as a result of infrastructure changes, but the issue wasn't surfaced by tests in our Continuous Integration (CI) system, it is not the fault of the infrastructure change.
takeaways:
  - title: Testing is Ownership
    content: You are responsible for defining the expected behavior of your system through automated tests. If it's not tested, it's not guaranteed to work.
  - title: Enable Scale
    content: This rule allows infrastructure teams to make large-scale changes safely without needing to understand every downstream application deeply.
  - title: Explicit Contracts
    content: Tests serve as an explicit contract between your application and the underlying platform.
relatedLaws: 
  - murphys-law
  - linus-law
resources:
  - title: "Software Engineering at Google"
    subtitle: "O'Reilly"
    type: "Book"
    url: "https://www.oreilly.com/library/view/software-engineering-at/9781492082781/"
  - title: "The Beyoncé Rule"
    subtitle: "Abseil / Titus Winters"
    type: "Article"
    url: "https://abseil.io/resources/swe-book/html/ch11.html#the_beyonceacutesemicolon_rule"
---

The Beyoncé Rule is a policy widely used at Google to manage the relationship between infrastructure teams and application developers. It is succinctly stated as: **"If you liked it, then you shoulda put a test on it."**

In complex engineering organizations, infrastructure teams (like those maintaining compilers, core libraries, or CI/CD pipelines) need to make changes that affect the entire codebase. The Beyoncé Rule dictates that if such a change breaks a specific application, but that breakage was not caught by the application's automated tests in the standard CI system, the fault lies with the **application team**, not the infrastructure team.

This shifts the mental model of testing: tests aren't just for finding bugs in your own code; they are a contract with the rest of the organization. They declare, "This behavior is important to me, and I expect it to remain invariant." Without this rule, large-scale modernization becomes impossible, as infrastructure teams would be paralyzed by the fear of breaking unknown dependencies.
