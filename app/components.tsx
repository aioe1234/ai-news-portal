"use client";

import Link from "next/link";
import { useState } from "react";
import type { NewsItem } from "./data";

const nav = [
  ["home", "首頁", "/"], ["ai", "AI News", "/ai"], ["uav", "UAV News", "/uav"],
  ["robot", "Robot News", "/robot"], ["summary", "Executive Summary", "/executive-summary"],
  ["archive", "Archive", "/executive-summary/archive"], ["dashboard", "Dashboard", "/dashboard"],
];

export function Shell({ active, children }: { active: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header"><div className="nav-wrap">
      <Link className="brand" href="/"><span>IN</span><b>Intelligence<br/>News Portal</b></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="開啟導覽">{open ? "×" : "☰"}</button>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="主要導覽">
        {nav.map(([id,label,href]) => <Link key={id} className={active === id ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <Link className="nav-action" href="/dashboard" aria-label="前往 Dashboard">↗</Link>
    </div></header>
    <main>{children}</main>
    <footer><div><strong>Intelligence News Portal</strong><span>AI · UAV · ROBOT WEEKLY</span></div><p>為產業決策者設計的每週情報入口 · 更新日期 2026.09.05</p></footer>
  </>;
}

export function NewsCard({ title, icon, items, href, mint=false }: { title: string; icon: string; items: NewsItem[]; href: string; mint?: boolean }) {
  return <article className="news-card"><div className="card-title"><h3>{title}</h3><span className={mint ? "round-icon mint" : "round-icon"}>{icon}</span></div>
    <ul>{items.map((item,i) => <li key={item.title}><i className={i > 0 && mint ? "mint-dot" : ""}/><span>{item.title}</span><small>{item.date}</small></li>)}</ul>
    <Link href={href}>查看全部 →</Link>
  </article>;
}

export function TrendChart({ compact=false }: { compact?: boolean }) {
  const series = compact ? [40,51,45,62,55,72,60,84,67,91,76] : [28,38,35,47,45,58,54,66,62,80,72,88];
  return <div className={compact ? "trend-card compact" : "trend-card"}>
    <div className="trend-title"><b>產業關注度趨勢</b><span>近 12 週</span></div>
    <div className="chart-area" role="img" aria-label="AI、UAV 與 Robot 關注度均呈上升趨勢">
      <div className="grid-lines" />
      <div className="line blue" style={{clipPath:`polygon(${series.map((v,i)=>`${i*100/(series.length-1)}% ${100-v}%`).join(",")})`}} />
      <div className="bar-series">{series.map((v,i)=><i key={i} style={{height:`${Math.max(12,v-18)}%`}} />)}</div>
    </div>
    <div className="legend"><span><i className="blue-dot"/>AI</span><span><i className="teal-dot"/>UAV</span><span><i className="mint-dot"/>Robot</span></div>
  </div>;
}

export function NewsPage({ active, title, label, intro, items }: { active: string; title: string; label: string; intro: string; items: NewsItem[] }) {
  return <Shell active={active}>
    <section className="page-hero"><p className="eyebrow">WEEKLY BRIEFING · {label}</p><h1>{title}</h1><p>{intro}</p><div className="page-meta"><span>本週 {items.length} 則精選</span><span>更新 2026.09.05</span><span>約 8 分鐘閱讀</span></div></section>
    <section className="content-wrap news-layout"><div className="feature-story">
      <span className="tag">本週首要訊號</span><h2>{items[0].title}</h2><p>{items[0].summary}</p><div><span>{items[0].source}</span><span>{items[0].region}</span></div><a href={items[0].url} target="_blank" rel="noreferrer">閱讀來源 ↗</a>
    </div><aside className="insight-box"><span>EDITOR&apos;S NOTE</span><h3>決策者應關注</h3><p>競爭已從單點技術性能，轉向「規模化部署、治理能力與單位經濟性」的綜合較量。</p></aside></section>
    <section className="content-wrap story-list"><div className="section-heading"><div><span className="heading-line"/><h2>本週完整情報</h2></div></div>
      {items.map((item,i)=><article key={item.title} className="story-row"><div className="story-index">0{i+1}</div><div><div className="story-meta"><span>{item.category}</span><span>{item.region}</span><span>影響 {item.impact}</span><span>{item.source} · {item.date}</span></div><h3>{item.title}</h3><p>{item.summary}</p>{item.signal&&<div className="story-detail signal"><b>驚奇／反直覺訊號</b><span>{item.signal}</span></div>}{item.industryImpact&&<div className="story-detail"><b>產業影響</b><span>{item.industryImpact}</span></div>}</div><a href={item.url} target="_blank" rel="noreferrer" aria-label={`閱讀 ${item.title}`}>↗</a></article>)}
    </section>
  </Shell>;
}
