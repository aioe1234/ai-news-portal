import { NewsPage } from "../components"; import { news } from "../data";
export default function Page(){return <NewsPage active="robot" label="ROBOTICS & PHYSICAL AI" title="每週 Robot News" intro="聚焦人形、工業與服務機器人，觀察 Physical AI 從展示走向量產部署。" items={news.robot}/>}
