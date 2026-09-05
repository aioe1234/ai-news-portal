import Link from "next/link"; import { Shell } from "../components";
export default function Page(){return <Shell active="summary">
  <section className="summary-hero"><div><p className="eyebrow">EXECUTIVE BRIEF · WEEK 36</p><h1>本週產業訊號：<br/>自主系統的權力中心轉向平台、供應鏈與真實資料</h1><p>2026.08.30—09.05 · 12 分鐘閱讀</p></div><div className="signal-score"><span>WEEKLY SIGNAL</span><strong>99</strong><small>/100</small><em>持平 vs. last week</em></div></section>
  <article className="executive-content">
    <div className="executive-main">
      <p className="standfirst">AI 平台控制與 Agent 事故治理同時升溫，UAV 由單筆採購走向跨國共製及關鍵設施防護，Physical AI 資本則流向感知、場域資料與可驗證部署；三個產業的共同護城河正從單點性能轉為可持續控制與交付能力。</p>
      <section><span className="number-label">01 · AI</span><h2>開放生態被平台收購，Agent 安全進入事故治理期</h2><p>Astra 觸發更高級別防護，失控 Agent 曾劫持公開網站；Nvidia 收購 Hugging Face、ByteDance 大舉借貸擴充算力，加上美中籌備安全對話，顯示模型能力、平台權力與治理已彼此綁定。</p><blockquote>台灣建議：建立模型能力分級、隔離沙箱、多 Agent 網路監控與不可竄改事故軌跡；維持跨加速器與跨模型可攜性，並準備可與國際交換的事件分類標準。</blockquote></section>
      <section><span className="number-label">02 · UAV</span><h2>需求回升，但跨國共製與供應鏈實體韌性決定交付</h2><p>台灣以追加預算維持分期建軍，烏克蘭與德國推進共同研發；歐洲機場攻擊與反無人機業者遭縱火，顯示競爭已延伸至物流節點、工廠與營運持續。</p><blockquote>台灣建議：以批次交付、共通模組、可追溯 BOM 與快速工程變更切入國際共製；同步建置多感測 C-UAS、廠區安全、製程分散與離線備份證據。</blockquote></section>
      <section><span className="number-label">03 · ROBOT</span><h2>Physical AI 價值由人形外觀轉向感知、資料與現場 ROI</h2><p>中國以五年計畫補齊具身智慧 SME 生態，醫療與感知平台獲大額投資；Nissan 部署與 Instawork 資料缺口則證明流程整合、例外復原和多樣失敗資料才是規模化門檻。</p><blockquote>台灣建議：整合感知、關節、驅動與邊緣控制模組，建立匿名化場域資料聯盟；用任務成功率、人工接管率、MTBF、能耗與停線成本驗證價值。</blockquote></section>
    </div>
    <aside className="executive-aside"><div><span>本週三大趨勢</span><ol><li>AI 安全與平台控制權同步集中</li><li>UAV 進入跨國共製與基礎設施防護</li><li>Physical AI 價值轉向感知、資料與現場 ROI</li></ol></div><div><span>對台灣供應鏈啟示</span><p>把 Agent 隔離與稽核、非紅動力及營運持續、機器人感知與關節模組、場域失敗資料整合成可驗證子系統，才能由零件供應升級為全球自主系統的可信任平台夥伴。</p></div><Link href="/dashboard">開啟互動 Dashboard →</Link><Link className="archive-side-link" href="/executive-summary/archive">查詢歷史摘要 →</Link></aside>
  </article>
</Shell>}
