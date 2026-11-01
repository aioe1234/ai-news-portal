import Link from "next/link"; import { Shell } from "../components";
export default function Page(){return <Shell active="summary">
  <section className="summary-hero"><div><p className="eyebrow">EXECUTIVE BRIEF · WEEK 44</p><h1>本週產業訊號：<br/>自主系統由單點能力轉向異質平台、跨域部署與主權控制</h1><p>2026.10.25—10.31 · 12 分鐘閱讀</p></div><div className="signal-score"><span>WEEKLY SIGNAL</span><strong>99</strong><small>/100</small><em>持平 vs. last week</em></div></section>
  <article className="executive-content">
    <div className="executive-main">
      <p className="standfirst">AI 的算力、模型與 Agent 走向多供應商及主權邊界；UAV 由大額採購、異質群飛與軟體定義自主延伸至海上經濟安全；Physical AI 則以真實運轉資料、伺服器製造任務及量產資本進入可複製部署期。</p>
      <section><span className="number-label">01 · AI</span><h2>多晶片、多模型與跨境服務重畫 AI 控制邊界</h2><p>OpenAI 擬採購 Google TPU，Anthropic 揭露十年逾 6,000 億美元算力承諾；中國以服務取代權重出口，美軍 Maven 與 Serval 則證明高風險及企業 Agent 的共同門檻是資料時效、權限分離與人類責任。</p><blockquote>台灣建議：建立 GPU／TPU／ASIC 共通驗證與多模型替代；盤點權重、API、資料和部署地，為 Agent 實施身分分離、短效憑證、敏感動作核准及離線降級。</blockquote></section>
      <section><span className="number-label">02 · UAV</span><h2>攻防採購、異質群隊與海上外溢形成跨域市場</h2><p>印度大額軍購同時涵蓋 UAV 與 C-UAS，台灣推動三型 VTOL 定翼機協同，Leonardo 導入 Hivemind；北韓量產與黑海無人艇擊沉商船，顯示自主系統已跨越平台、國境與商業航運。</p><blockquote>台灣建議：建立跨機型任務語意、開放式 C2、數位孿生及斷鏈自主；將非紅馬達／ESC／電池、感測融合、低成本攔截與港口／航道恢復演練整合為資格包。</blockquote></section>
      <section><span className="number-label">03 · ROBOT</span><h2>真實工時、製程工作包與量產資本推動 Physical AI 跨廠部署</h2><p>Foxconn 在德州部署逾 10 台人形機器人並以機器人組裝 GB300 測試托盤，Digit 累積 6.5 萬小時且擴至兩州；Unitree 利潤承壓、Agility 募資上市則把研發、產能與服務成本帶入公開檢驗。</p><blockquote>台灣建議：以 GR00T／Isaac 相容的關節、驅動、感測及 IPC 模組切入；把熟練工影片與失敗復原轉成工作包，用任務成功率、MTBF、MTTR、能耗和人工接管率決定擴站。</blockquote></section>
    </div>
    <aside className="executive-aside"><div><span>本週三大趨勢</span><ol><li>AI 競爭轉向多晶片、多模型與主權服務邊界</li><li>UAV 以攻防採購、異質編隊及海上安全擴大跨域影響</li><li>Physical AI 用真實工時、製程工作包與量產資本證明可部署性</li></ol></div><div><span>對台灣供應鏈啟示</span><p>把 GPU／TPU／ASIC 共通設計、Agent 權限與跨境模型清單，UAV 異質群隊 C2／非紅推進／海上聯防，以及機器人關節模組／製程資料／RaaS 維運整合成可驗證平台；台灣應以 AI 伺服器與海洋場域把製造優勢轉為任務級部署證據。</p></div><Link href="/dashboard">開啟互動 Dashboard →</Link><Link className="archive-side-link" href="/executive-summary/archive">查詢歷史摘要 →</Link></aside>
  </article>
</Shell>}
