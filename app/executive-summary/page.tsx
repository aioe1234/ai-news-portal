import Link from "next/link"; import { Shell } from "../components";
export default function Page(){return <Shell active="summary">
  <section className="summary-hero"><div><p className="eyebrow">EXECUTIVE BRIEF · WEEK 39</p><h1>本週產業訊號：<br/>自主系統進入成本、邊界與規模部署的實證期</h1><p>2026.09.20—09.26 · 12 分鐘閱讀</p></div><div className="signal-score"><span>WEEKLY SIGNAL</span><strong>99</strong><small>/100</small><em>持平 vs. last week</em></div></section>
  <article className="executive-content">
    <div className="executive-main">
      <p className="standfirst">AI 模型以更低成本、更強安全評測與多模型協作競爭；UAV 的推進、監管與抗干擾定位同時改寫可信任條件；Physical AI 則由產量敘事轉向行為資料、外部安全層與數百台級真實部署。</p>
      <section><span className="number-label">01 · AI</span><h2>模型降本與全棧投資並進，多模型治理成為企業基本架構</h2><p>Claude Opus 5.5 同時降低成本與越界率，Apple 把兆參數模型帶回本地端；Alibaba 加碼模型、晶片和 20GW 雲端，DeepSeek 參與安理會治理，Palo Alto 則證明單一模型無法覆蓋複雜資安風險。</p><blockquote>台灣建議：以任務成本、成功率及越界率建立跨模型評測；部署可替換的雲端／本地推論、多模型 Agent SOC 與高風險人工核准，硬體投資同步避免單一全棧平台鎖定。</blockquote></section>
      <section><span className="number-label">02 · UAV</span><h2>推進升級、資產管制與導航韌性重畫可信任邊界</h2><p>台灣 7A 聯盟打入美國市場，噴射 Shahed 讓既有攔截率大幅下降；北京把監管推到設備持有，氫燃料 UAV 與 Kongsberg 抗干擾 PNT 訂單則顯示動力及導航成為新價值核心。</p><blockquote>台灣建議：建立聯盟級 BOM、資安及維保證據，並把馬達／ESC、氫電 DC/DC、GNSS／INS、視覺定位與 GPS-denied 測試整合成可認證動力與導航平台。</blockquote></section>
      <section><span className="number-label">03 · ROBOT</span><h2>人形基數仍小，行為工廠、外部安全與軟體入口決定規模化</h2><p>全球人形年銷僅約 7,000 台，Boston Dynamics 先建行為工廠；RoboHarm 暴露模型控制的實體風險，Qualcomm 收購 MoveIt 維護商，AgiBot 則以 300 台級場域驗證多機營運。</p><blockquote>台灣建議：用付費部署、工作時數和重複訂單驗證需求；推動 ROS 2／MoveIt 相容關節套件、獨立安全 PLC、行為資料治理及多機遠端維運，避免只追逐整機出貨。</blockquote></section>
    </div>
    <aside className="executive-aside"><div><span>本週三大趨勢</span><ol><li>AI 競爭由單一能力轉向成本、安全與多模型編排</li><li>UAV 信任邊界延伸至推進、資產管制與抗干擾定位</li><li>Physical AI 由出貨數量轉向行為資料、外部安全與規模營運</li></ol></div><div><span>對台灣供應鏈啟示</span><p>把模型評測與多 Agent 治理、可追溯動力與 Assured PNT、機器人關節驅動與獨立安全控制做成可驗證模組；再以台灣工廠、醫療、觀光及海事場域累積真實任務資料，形成「模組＋證據＋場域」的出口能力。</p></div><Link href="/dashboard">開啟互動 Dashboard →</Link><Link className="archive-side-link" href="/executive-summary/archive">查詢歷史摘要 →</Link></aside>
  </article>
</Shell>}
