---
id: galls-law
name: 蓋爾定律
icon: account_tree
summary: 正常運作的複雜系統，無一例外都是從正常運作的簡單系統演化而來的。
category: third-way
origin:
  author: John Gall
  context: 《系統學》（Systemantics, 1975）。
  quote: 從頭開始設計的複雜系統永遠無法正常運作，也無法透過修補來使其運作。
takeaways:
  - title: MVP 最小可行產品方法
    content: 從小處著手，進行驗證並持續迭代。切勿嘗試一次性建構出最終的複雜系統。
  - title: 演進式架構
    content: 允許系統架構根據真實世界的實際使用情況與回饋逐步演進。
  - title: 絞殺者無花果模式
    content: 現代化遺留系統時，應在舊系統周圍漸進式地建構新系統，而非進行高風險的「一次性重寫」。這個模式由 Martin Fowler 命名，透過獨立驗證每個遷移步驟來降低風險。
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

正常運作的複雜系統，無一例外都是從正常運作的簡單系統演化而來的。從頭開始設計的複雜系統永遠無法正常運作，也無法透過修補來使其運作。

這個原則對軟體現代化具有深遠的影響。**絞殺者無花果模式（Strangler Fig Pattern）**由 Martin Fowler 提出，將蓋爾定律應用於遺留系統的遷移。就像絞殺植物逐漸纏繞宿主樹木直至能獨立站立一樣，團隊可以在遺留系統周圍漸進地建構新功能，逐步將流量路由至新實現，直到舊系統可以安全退休。

這種方法承認了系統必須演進而非全盤替換的現實——既尊重現有系統的複雜性，又滿足轉型期間持續交付價值的需求。
