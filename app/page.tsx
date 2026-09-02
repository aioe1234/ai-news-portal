import Link from "next/link";
import { NewsCard, Shell, TrendChart } from "./components";
import { news } from "./data";

export default function Home() {
  return (
    <Shell active="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">WEEKLY INTELLIGENCE · 2026.08.23—08.29</p>
          <h1>掌握每週 AI、UAV 與<br />機器人產業關鍵脈動</h1>
          <p className="lead">精選全球關鍵新聞、產業訊號與決策洞察，<br className="desktop-only" />協助您快速掌握本週趨勢。</p>
          <Link className="primary-cta" href="/executive-summary">查看本週重點 <span>→</span></Link>
        </div>
        <div className="hero-visual" aria-label="本週產業關注趨勢">
          <div className="world-grid" aria-hidden="true">● · · ● · · · ●<br />· ● · · · ● · ·<br />· · ● · ● · · ●</div>
          <TrendChart compact />
          <div className="mini-panels">
            <div className="mini-card"><span>地區關注分布</span><div className="donut" /><b>亞洲 40%</b></div>
            <div className="mini-card"><span>本週訊號強度</span><strong>99<small>/100</small></strong><em>與上週持平</em></div>
          </div>
        </div>
      </section>

      <section className="kpi-strip" aria-label="本週統計">
        <div><span className="icon-tile">▤</span><strong>15<small> 則</small></strong><p>本週精選新聞</p></div>
        <div><span className="icon-tile mint">↗</span><strong className="mint-text">3<small> 大趨勢</small></strong><p>產業關鍵趨勢</p></div>
        <div><span className="icon-tile">◷</span><strong>24<small> 分鐘</small></strong><p>本週閱讀時間</p></div>
      </section>

      <section className="section-block">
        <div className="section-heading"><div><span className="heading-line" /><h2>最新頭條</h2></div><Link href="/ai">查看全部 →</Link></div>
        <div className="headline-grid">
          <NewsCard title="本週精選" icon="☆" items={[news.ai[0], news.uav[0], news.robot[0]]} href="/executive-summary" />
          <NewsCard title="AI News" icon="◎" items={news.ai.slice(0,3)} href="/ai" />
          <NewsCard title="UAV News" icon="✥" items={news.uav.slice(0,3)} href="/uav" mint />
          <NewsCard title="Robot News" icon="⌁" items={news.robot.slice(0,3)} href="/robot" mint />
        </div>
      </section>

      <Link className="summary-banner" href="/executive-summary">
        <span className="summary-icon">▤</span><strong>Executive Summary</strong><span>產業重點摘要與關鍵洞察</span><b>進入閱讀 →</b>
      </Link>
    </Shell>
  );
}
