---
id: conways-law
name: 康威定律
icon: hub
summary: 組織設計出的系統結構，往往會複製其自身的溝通結構。
category: second-way
origin:
  author: Melvin Conway
  context: 《委員會如何發明？》（How Do Committees Invent?, 1967）。
  quote: 設計系統的組織，其產生的設計必然受限於複製這些組織的溝通結構。
takeaways:
  - title: 逆康威操縱法
    content: 你可以透過調整團隊結構，來改變軟體架構與結構。
  - title: 團隊邊界
    content: API 邊界往往反映了團隊的邊界。確保團隊組織與期望的系統架構一致。
  - title: 鬆散耦合架構
    content: 《加速》（Accelerate）一書指出，鬆散耦合的架構使團隊能夠獨立部署，降低溝通成本與協調代價。
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

任何設計系統（廣義定義）的組織，其產生的系統設計結構，必然是該組織溝通結構的複製品。

正如**《加速：精益軟體與 DevOps 的科學》（Accelerate）**一書所強調的，鬆散耦合的架構允許團隊獨立工作，顯著減少交付軟體所需的協調與溝通開銷。透過將架構與目標團隊結構互相對齊（反之亦然），組織可以獲得更高的交付效能與穩定性。
