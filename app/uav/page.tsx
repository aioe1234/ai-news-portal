import { NewsPage } from "../components"; import { news } from "../data";
export default function Page(){return <NewsPage active="uav" label="UNCREWED AERIAL VEHICLES" title="每週 UAV News" intro="從監管、國防、商用營運到推進系統，追蹤無人機產業鏈的關鍵移動。" items={news.uav}/>}
