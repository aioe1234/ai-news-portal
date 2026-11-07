import Link from "next/link"; import { Shell } from "../components";
export default function Page(){return <Shell active="summary">
  <section className="summary-hero"><div><p className="eyebrow">EXECUTIVE BRIEF · WEEK 45</p><h1>本週產業訊號：<br/>自主系統競爭轉向受控能力、網路化服務與資料主權</h1><p>2026.11.01—11.07 · 12 分鐘閱讀</p></div><div className="signal-score"><span>WEEKLY SIGNAL</span><strong>99</strong><small>/100</small><em>持平 vs. last week</em></div></section>
  <article className="executive-content">
    <div className="executive-main">
      <p className="standfirst">AI 以白名單能力、算力合規及先進封裝重畫控制邊界；UAV 由單機採購走向 DFR、BVLOS、衛星資料鏈與共同 C-UAS 市場；Physical AI 則以資料工廠、跨形體大腦、上市檢驗及客戶技能主權邁入產業化。</p>
      <section><span className="number-label">01 · AI</span><h2>白名單能力、算力合規與先進封裝形成三層控制面</h2><p>GPT-6 Cyber 以 Critical 等級限制客戶，H200 庫存卡在香港、Oracle 取消騰訊算力租賃；同時先進封裝產值首度超越傳統封裝，美國則準備彙整 AI 實驗室適用法律。</p><blockquote>台灣建議：建立模型能力分級、工具白名單與全軌跡稽核；將客戶、地區及最終用途綁定算力交付，並以 CoWoS／面板級封裝、HBM、測試及熱翹曲證據擴大台灣優勢。</blockquote></section>
      <section><span className="number-label">02 · UAV</span><h2>DFR、BVLOS、衛星資料鏈與共同市場把 UAV 變成服務網路</h2><p>Axon 追加投資 Skydio、Zipline 估值大增，NATO 建立可直接採購的 C-UAS 商城；俄羅斯以小型低軌星座支援無人機，台灣元件產地事件則把非紅要求推進拆機驗收與求償。</p><blockquote>台灣建議：整合機庫、飛控、影像、證據鏈及派遣 API；發展低噪音推進、多鏈路自動切換及斷鏈自主，並用元件序號、封裝地、韌體與替代料核准建立非紅資格包。</blockquote></section>
      <section><span className="number-label">03 · ROBOT</span><h2>資料工廠、跨形體大腦與技能主權決定 Physical AI 規模</h2><p>中國資本由硬體轉向機器人大腦，南韓建立 12 台人形資料工廠；Agility 上市讓部署經濟接受季度檢驗，NEURA 電網合作與 Pudu 共用大腦則顯示任務資料、技能所有權及跨平台重用成為交易核心。</p><blockquote>台灣建議：建立視覺、力矩、電流、觸覺、失敗復原與人工接管的共通資料標準；讓關節、驅動及 IPC 提供 URDF／USD、控制 API 與安全狀態，技能以客戶可控版本化資產交付。</blockquote></section>
    </div>
    <aside className="executive-aside"><div><span>本週三大趨勢</span><ol><li>AI 能力、算力與封裝供應鏈同步進入受控交付</li><li>UAV 價值由平台性能擴展至網路服務、空域與共同採購</li><li>Physical AI 以任務資料、技能所有權與公開市場證明商業化</li></ol></div><div><span>對台灣供應鏈啟示</span><p>把模型分級／算力合規／封裝良率，UAV 的 DFR／BVLOS／多鏈路 C2／元件追溯，以及機器人的任務資料／技能版本／關節遙測整合成可驗證平台；台灣應把製造、公共安全及能源場域轉化為可出口的營運與資料資產。</p></div><Link href="/dashboard">開啟互動 Dashboard →</Link><Link className="archive-side-link" href="/executive-summary/archive">查詢歷史摘要 →</Link></aside>
  </article>
</Shell>}
