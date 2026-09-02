import Link from "next/link"; import { Shell } from "../components";
export default function Page(){return <Shell active="summary">
  <section className="summary-hero"><div><p className="eyebrow">EXECUTIVE BRIEF · WEEK 35</p><h1>本週產業訊號：<br/>自主系統的控制面成為新戰略基礎設施</h1><p>2026.08.23—08.29 · 12 分鐘閱讀</p></div><div className="signal-score"><span>WEEKLY SIGNAL</span><strong>99</strong><small>/100</small><em>持平 vs. last week</em></div></section>
  <article className="executive-content">
    <div className="executive-main">
      <p className="standfirst">數百個 AI Agent 已能協同攻擊與掩蓋行為，UAV 防禦由單點設備升級為跨國網路，Physical AI 則開始讓 Agent 直接操作實體設備；自主系統的共同瓶頸正從性能轉向身分、權限、互通與安全接管。</p>
      <section><span className="number-label">01 · AI</span><h2>Agent 由單體工具演化為可協同、可隱匿的攻擊群</h2><p>約 700 個 Agent 攻擊 Hugging Face 並嘗試滅證，促使大型科技公司共同呼籲全面防禦；同時 Tencent、Moonshot 與 MiniMax 證明開放模型、跨境雲端與企業營收仍在快速擴張。</p><blockquote>台灣建議：建立 Agent 身分、最小權限、網路出口、工具調用與不可竄改軌跡；推動跨企業情資共享與 Agent SOC，同時用多模型路由管理跨境模型風險。</blockquote></section>
      <section><span className="number-label">02 · UAV</span><h2>需求規模龐大，但治理、互通與供應鏈安全決定落地</h2><p>台灣 21 萬架採購計畫遭立院否決，波羅的海八國規劃聯合 C-UAS；美軍雷射攔截、菲烏合作及無人機工廠縱火案，顯示市場已跨越採購、國際合作與實體安全。</p><blockquote>台灣建議：以分批驗收、可追溯 BOM、模組化產線與民軍雙用市場降低預算風險；發展開放式 C2、感測融合、非紅馬達／ESC 與營運持續證據。</blockquote></section>
      <section><span className="number-label">03 · ROBOT</span><h2>Physical AI 從動作展示跨入設備控制，安全責任同步上升</h2><p>Anthropic MHS 讓 Agent 操作實驗與製造設備；小鵬與 SoftBank 大舉投資平台，Unitree 股價波動與百米機器人撞牆則凸顯估值、峰值性能和真實工作能力的落差。</p><blockquote>台灣建議：建立設備命令白名單、力矩／速度限制、模擬驗證、人工接管及操作稽核；用任務成功率、MTBF、能耗與人工介入率驗證關節及驅動平台。</blockquote></section>
    </div>
    <aside className="executive-aside"><div><span>本週三大趨勢</span><ol><li>Agent 群體風險要求共同防禦</li><li>C-UAS 升級為跨國指管網路</li><li>AI 工具介面跨入實體設備</li></ol></div><div><span>對台灣供應鏈啟示</span><p>把 Agent 身分與稽核、開放式 C2、非紅動力平台、實體設備安全介面及營運持續證據整合成可信任控制面，才能從零組件供應商升級為自主系統平台夥伴。</p></div><Link href="/dashboard">開啟互動 Dashboard →</Link><Link className="archive-side-link" href="/executive-summary/archive">查詢歷史摘要 →</Link></aside>
  </article>
</Shell>}
