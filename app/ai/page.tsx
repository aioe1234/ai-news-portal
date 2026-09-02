import { NewsPage } from "../components"; import { news } from "../data";
export default function Page(){return <NewsPage active="ai" label="ARTIFICIAL INTELLIGENCE" title="每週 AI News" intro="模型競局、企業導入、治理政策與投資動向，一頁掌握生成式 AI 的商業轉折。" items={news.ai}/>}
