---
id: littles-law
name: 利特爾法則
icon: timeline
summary: 系統中的平均項目數等於平均到達率乘以項目在系統中的平均停留時間。
category: first-way
origin:
  author: John Little
  context: 於 1961 年發表證明，基於 1954 年的觀察。
  quote: L = λW
takeaways:
  - title: 限制 WIP (在製品)
    content: 要縮短前置時間 (W)，你必須減少在製品數量 (L) 或提升吞吐量 (λ)。
  - title: 可預測性
    content: 穩定的系統更具可預測性。到達率或處理時間的波動會打亂流動。
  - title: 資源利用率與等待時間
    content: 當資源利用率接近 100% 時，等待時間會呈指數級增加（金曼公式 Kingman's Formula）。緩衝裕量（Slack）對於流動是必要的。
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

利特爾法則（Little's Law）是 John Little 提出的定理，指出在穩定系統中，顧客（或工作項目）的長期平均數量等於長期的平均有效到達率乘以顧客在系統中花費的平均時間。

在軟體交付中，這意味著要更快完成工作（縮短 Lead Time），你必須要麼工作得更快（提升吞吐量），要麼——更現實地——同時做更少的事情（減少 WIP）。這顛覆了「讓每個人保持忙碌」（100% 利用率）就能保持高效的直覺；現實中，沒有緩衝的高利用率只會造成嚴重塞車。
