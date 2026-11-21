import Link from "next/link"; import { Shell } from "../components";
export default function Page(){return <Shell active="summary">
  <section className="summary-hero"><div><p className="eyebrow">EXECUTIVE BRIEF · WEEK 47</p><h1>本週產業訊號：<br/>自主系統競爭轉向人類控制、跨國共製與可複製營運</h1><p>2026.11.15—11.21 · 12 分鐘閱讀</p></div><div className="signal-score"><span>WEEKLY SIGNAL</span><strong>99</strong><small>/100</small><em>持平 vs. last week</em></div></section>
  <article className="executive-content">
    <div className="executive-main">
      <p className="standfirst">AI 的控制面由模型護欄擴展至軍事人類決策、金融 Agent 熔斷、雲端算力合規與基建融資；UAV 以跨國共製、非紅證據、機動反制與現場資料服務加速部署；Physical AI 則從人形外觀轉向跨站點任務、資料主權、可維修模組及跨 UAV／Robot 的動力量產平台。</p>
      <section><span className="number-label">01 · AI</span><h2>人類控制、Agent 熔斷、算力合規與融資透明重畫 AI 邊界</h2><p>美中同意重大軍事 AI 決策保留人類參與，Microsoft 以程式與資安專用模型挑戰通用模型；美國把晶片管制延伸至海外雲端，Fed 則警告 Agent 群聚行動與複雜基建融資可能形成金融穩定風險。</p><blockquote>台灣建議：把 human-in/on-the-loop、Agent 身分與速率限制、租戶／工作負載追溯及熔斷寫入系統；供應鏈用預付款、分期驗收、取消補償與可轉售產能管理 AI 專案信用。</blockquote></section>
      <section><span className="number-label">02 · UAV</span><h2>跨國共製、非紅證據、機動反制與現場資料服務決定部署</h2><p>德國資助 Auterion–Skyfall 在地量產，台灣供應鏈卻仍受採購節奏、認證與飛測場域制約；Northrop 機動 C-UAS、BRINC 行動端資料服務及德荷無人／混合動力合作，把競爭拉到完整營運網路。</p><blockquote>台灣建議：建立共通 BOM 原產地、馬達／ESC／電池 qualification 與場域資料格式；以開放式 C2、混合動力能源管理、即時資料 API、在地組裝及快速工程變更加入盟友共製。</blockquote></section>
      <section><span className="number-label">03 · ROBOT</span><h2>跨站複製、資料主權與共用動力平台取代人形外觀競賽</h2><p>Genesis 以輪式折疊形體獲大額投資，ABB–SoftBank 交易因資料主權面臨拆分；GlobalFoundries、ROBOTERA 的晶圓廠與郵政部署，加上三瑞跨 UAV／Robot 動力擴產，顯示量產價值來自可靠任務與供應平台。</p><blockquote>台灣建議：用跨站任務成功率、節拍、人工接管、MTBF、顆粒／ESD 與資料不出境驗收；將馬達、減速器、驅動、感測與產測做成可追溯、可快換、跨形體模組。</blockquote></section>
    </div>
    <aside className="executive-aside"><div><span>本週三大趨勢</span><ol><li>AI 由能力競賽轉向人類控制、可驗證授權與資本承受度</li><li>UAV 以跨國共製、供應鏈證據與資料服務形成可部署網路</li><li>Physical AI 由外觀與單點 demo 轉向跨站複製、資料主權及模組化量產</li></ol></div><div><span>對台灣供應鏈啟示</span><p>把軍事 AI 人類控制／金融 Agent 熔斷／算力租戶追溯，UAV 的共製技轉／非紅 BOM／機動 C-UAS／混合動力，以及機器人的晶圓廠巡檢／跨站物流／關節快換整合成可稽核平台；並以共用馬達、驅動與自動產測底座同時服務 UAV 與 Robot。</p></div><Link href="/dashboard">開啟互動 Dashboard →</Link><Link className="archive-side-link" href="/executive-summary/archive">查詢歷史摘要 →</Link></aside>
  </article>
</Shell>}
