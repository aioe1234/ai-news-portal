import type { Metadata } from "next";
import "./globals.css";

const assetBase = process.env.GITHUB_PAGES === "true" ? "/ai-news-portal" : "";

export const metadata: Metadata = {
  title: "AI News Portal｜每週產業情報",
  description: "每週 AI、UAV 與 Robot 產業新聞、可查詢的 Executive Summary Archive 與互動趨勢 Dashboard。",
  icons: { icon: `${assetBase}/favicon.svg`, shortcut: `${assetBase}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
