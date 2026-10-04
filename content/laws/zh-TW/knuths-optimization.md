---
id: knuths-optimization
name: 高德納優化法則
icon: speed
summary: 過早優化是萬惡之源。
category: second-way
origin:
  author: Donald Knuth
  context: 《使用 goto 語句進行結構化程式設計》（Structured Programming with go to Statements, 1974）。
  quote: 我們應該在大約 97% 的時間裡忘掉微小的效率：過早優化是萬惡之源。
takeaways:
  - title: 回饋優先
    content: 效能優化需要回饋迴路（效能分析/Profiling）。未經強化的測量就進行優化純屬盲目猜測。
  - title: 97% 法則
    content: 專注於頻繁執行的 3% 程式碼（關鍵路徑）。優化其餘 97% 的程式碼是一種浪費。
relatedLaws:
  - pareto-principle
  - occams-razor
resources:
  - title: "Structured Programming with go to Statements"
    subtitle: "ACM Digital Library"
    type: "Paper"
    url: "https://dl.acm.org/doi/10.1145/356635.356640"
---

高德納（Donald Knuth）著名地警告說：「過早優化是萬惡之源。」在軟體工程中，這提醒我們應優先考慮編寫可讀、可運作的程式碼，並且僅在回饋（效能分析數據 Profiling Data）明確指出瓶頸時才進行效能優化。
