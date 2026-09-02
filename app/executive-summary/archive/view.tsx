"use client";

import { useMemo, useState } from "react";
import { Shell } from "../../components";
import { summaryArchive } from "./data";

export function ArchiveView() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("全部");
  const [topic, setTopic] = useState("全部");
  const [expanded, setExpanded] = useState<string | null>(summaryArchive[0]?.id ?? null);

  const years = [...new Set(summaryArchive.map((item) => item.year))];
  const topics = [...new Set(summaryArchive.flatMap((item) => item.tags))];
  const filtered = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase("zh-Hant");
    return summaryArchive.filter((item) => {
      const searchable = [item.title, item.standfirst, item.taiwanInsight, ...item.tags, ...item.trends, ...item.sections.flatMap((section) => [section.title, section.body, section.recommendation])].join(" ").toLocaleLowerCase("zh-Hant");
      return (year === "全部" || item.year === Number(year)) && (topic === "全部" || item.tags.includes(topic)) && (!keyword || searchable.includes(keyword));
    });
  }, [query, year, topic]);

  return <Shell active="archive">
    <section className="archive-hero">
      <div><p className="eyebrow">EXECUTIVE KNOWLEDGE BASE</p><h1>Executive Summary Archive</h1><p>搜尋歷史摘要、關鍵趨勢與對台灣產業的建議。</p></div>
      <div className="archive-stat"><strong>{summaryArchive.length}</strong><span>期歷史摘要</span><small>自 2026 年 7 月起</small></div>
    </section>

    <section className="archive-wrap">
      <div className="archive-filters" aria-label="Executive Summary Archive 篩選器">
        <label className="archive-search"><span>關鍵字查詢</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋模型、治理、UAV、供應鏈…" aria-label="關鍵字查詢" /></label>
        <label><span>年度</span><select value={year} onChange={(event) => setYear(event.target.value)} aria-label="年度"><option>全部</option>{years.map((value) => <option key={value}>{value}</option>)}</select></label>
        <label><span>主題</span><select value={topic} onChange={(event) => setTopic(event.target.value)} aria-label="主題"><option>全部</option>{topics.map((value) => <option key={value}>{value}</option>)}</select></label>
        <button onClick={() => { setQuery(""); setYear("全部"); setTopic("全部"); }}>重設</button>
      </div>

      <div className="archive-result-head"><span><b>{filtered.length}</b> RESULTS</span><small>依日期由新至舊</small></div>
      <div className="archive-list">
        {filtered.map((item) => {
          const isExpanded = expanded === item.id;
          return <article className={isExpanded ? "archive-card expanded" : "archive-card"} key={item.id}>
            <div className="archive-card-top"><div><span>WEEK {item.week} · {item.dateRange}</span><h2>{item.title}</h2></div><div className="archive-score"><strong>{item.score}</strong><small>/100</small></div></div>
            <p>{item.standfirst}</p>
            <div className="archive-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="archive-glance"><div><b>三大趨勢</b><ol>{item.trends.map((trend) => <li key={trend}>{trend}</li>)}</ol></div><div><b>台灣產業啟示</b><p>{item.taiwanInsight}</p></div></div>
            {isExpanded && <div className="archive-details">{item.sections.map((section) => <section key={section.label}><span>{section.label}</span><h3>{section.title}</h3><p>{section.body}</p><blockquote>建議：{section.recommendation}</blockquote></section>)}</div>}
            <button className="archive-expand" onClick={() => setExpanded(isExpanded ? null : item.id)} aria-expanded={isExpanded}>{isExpanded ? "收合全文 ↑" : "展開全文 ↓"}</button>
          </article>;
        })}
        {!filtered.length && <div className="archive-empty"><strong>找不到符合條件的摘要</strong><p>請縮短關鍵字，或重設年度與主題篩選。</p></div>}
      </div>
    </section>
  </Shell>;
}
