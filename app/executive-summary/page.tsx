import Link from "next/link"; import { Shell } from "../components";
export default function Page(){return <Shell active="summary">
  <section className="summary-hero"><div><p className="eyebrow">EXECUTIVE BRIEF · WEEK 42</p><h1>本週產業訊號：<br/>自主系統的競爭由性能轉向主權、資本與資料控制</h1><p>2026.10.11—10.17 · 12 分鐘閱讀</p></div><div className="signal-score"><span>WEEKLY SIGNAL</span><strong>99</strong><small>/100</small><em>持平 vs. last week</em></div></section>
  <article className="executive-content">
    <div className="executive-main">
      <p className="standfirst">AI 同時面臨 Agent 真實入侵、模型出口管制與高槓桿算力融資壓力；UAV 的空域、通訊及供應鏈主權成為作戰與商業前提；Physical AI 則以空間感知、合成資料、致動器平台和大型產業投資加速工業化。</p>
      <section><span className="number-label">01 · AI</span><h2>真實入侵、出口管制與高槓桿融資共同重畫 AI 邊界</h2><p>印度 CERT-In 證實 Agent 越權讀取企業資料，中國擬管制模型、Agent 與運算叢集技術；CoreWeave 股債重挫與台積電先進製程需求仍強，則顯示 AI 週期可能先淘汰融資結構，而非核心硬體。</p><blockquote>台灣建議：建立 Agent 獨立身分、短效憑證、出口白名單與全軌跡稽核；依模型權重、服務與部署地管理跨境風險，AI 硬體長約同步加入信用保護、分期驗收與產能轉換條款。</blockquote></section>
      <section><span className="number-label">02 · UAV</span><h2>空域、通訊、供應鏈與測試場形成 UAV 的主權控制面</h2><p>FAA 以低空禁航配合邊境 C-UAS，美台擴大非紅共製，歐盟制裁深入零件鏈；Starshield 速度限制與蒙大拿大型測試場則證明，外部通訊服務和驗證基礎設施可直接決定自主系統效能。</p><blockquote>台灣建議：建立跨部會 C-UAS SOP、共同 BOM 與最終用途追溯；將非紅馬達／ESC／電池、多鏈路通訊、斷鏈自主及 GPS-denied／EMC／群飛測試整合為可出口資格包。</blockquote></section>
      <section><span className="number-label">03 · ROBOT</span><h2>空間資料、合成訓練與 Tier 1 平台推動 Physical AI 工業化</h2><p>Hesai 由光達延伸至空間相機與致動器，DexForce 用合成資料降低訓練成本；德國工業 AI 政策、Mind Robotics 與 CMR Surgical 的大型投資，顯示資本正流向可部署的工業及高監管場景。</p><blockquote>台灣建議：把 3D 感知、馬達、減速器、編碼器及力覺整合成關節 reference design；建立數位孿生、合成資料與實機失敗閉環，並以 MTBF、任務成功率、人工接管率和服務 SLA 驗證價值。</blockquote></section>
    </div>
    <aside className="executive-aside"><div><span>本週三大趨勢</span><ol><li>AI 的治理邊界擴張至 Agent 身分、模型出口與資本紀律</li><li>UAV 的制空能力取決於空域、通訊、供應鏈與測試主權</li><li>Physical AI 由展示轉向空間資料、合成訓練與 Tier 1 平台</li></ol></div><div><span>對台灣供應鏈啟示</span><p>把 Agent 身分與跨境模型清單、AI 硬體信用風險、UAV 非紅 BOM／多鏈路通訊／複合測試，以及機器人空間資料、關節模組與任務 ROI 整合為可稽核的平台能力；台灣應以製造場域把「主權控制＋工程證據」轉成出口優勢。</p></div><Link href="/dashboard">開啟互動 Dashboard →</Link><Link className="archive-side-link" href="/executive-summary/archive">查詢歷史摘要 →</Link></aside>
  </article>
</Shell>}
