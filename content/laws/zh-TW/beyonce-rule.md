---
id: beyonce-rule
name: 碧昂絲法則
icon: verified
summary: 如果你喜歡這項功能，就應該為它加上 CI 測試。
category: second-way
origin:
  author: Google 工程團隊
  context: 《Google 軟體工程》（Software Engineering at Google, 2020）。
  quote: 如果產品因基礎設施變更而發生停機或其他問題，但該問題並未由我們持續整合 (CI) 系統中的測試發現，這並非基礎設施變更的責任。
takeaways:
  - title: 測試即所有權
    content: 你有責任透過自動化測試來定義系統的預期行為。如果未經測試，就無法保證其運作正常。
  - title: 賦能大規模擴展
    content: 這項法則允許基礎設施團隊安全地進行大規模變更，而無需深入瞭解每一個下游應用程式。
  - title: 明確的合約
    content: 測試是你的應用程式與底層平台之間明確的行為合約。
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

碧昂絲法則（The Beyoncé Rule）是 Google 廣泛用於管理基礎設施團隊與應用程式開發者之間關係的一項政策。其簡明簡潔的描述為：**「如果你喜歡它，就應該為它加上測試。」**

在複雜的工程組織中，基礎設施團隊（例如維護編譯器、核心函式庫或 CI/CD 流水線的團隊）需要進行影響整個程式庫的變更。碧昂絲法則規定，如果這類變更破壞了特定的應用程式，但該破壞並未被標準 CI 系統中的應用程式自動化測試捕捉到，則責任歸屬於**應用程式團隊**，而非基礎設施团队。

這轉變了測試的心智模型：測試不只是為了尋找自己程式碼中的 Bug，更是與組織中其他團隊的一份合約。測試宣告了：「這種行為對我來說很重要，我希望它保持不變。」沒有這條法則，大規模的現代化將變得不可能，因為基礎設施團隊會因害怕破壞未知的依賴而陷入癱瘓。
