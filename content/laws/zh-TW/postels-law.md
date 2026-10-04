---
id: postels-law
name: 波斯泰爾定律
icon: input_circle
summary: 對自己發送的內容要保守，對自己接收的內容要寬容。
category: second-way
origin:
  author: Jon Postel
  context: TCP 規格說明 (RFC 793, 1981)。
  quote: TCP 實現應遵循健壯性一般原則：對自己的行為要保守，對從他人處接收的內容要寬容。
takeaways:
  - title: 輸入驗證
    content: 如果意圖明確，接受格式微有瑕疵的輸入（在合理範圍內），但始終產出嚴格合規的輸出。
  - title: 系統健壯性
    content: 系統應具備處理輸入非預期變化的能力，而非直接崩潰。
relatedLaws:
  - hyrums-law
resources:
  - title: "Robustness Principle"
    subtitle: "Wikipedia Entry"
    type: "Article"
    url: "https://en.wikipedia.org/wiki/Robustness_principle"
---

也被稱為**健壯性原則（Robustness Principle）**，由網際網路早期先驅 Jon Postel 提出。它適用於網路協定設計以及 API 的提供與使用。
