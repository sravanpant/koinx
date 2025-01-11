import GetStartedCard from "./GetStartedCard"
import TrendingCoins from "./TrendingCoins"

export default function Sidebar() {
  return (
    <div className="space-y-5">
      <GetStartedCard />
      <TrendingCoins />
    </div>
  )
}