import CardGeneric from '../ReusableComponents/CardGeneric'
import TradingDaysLogo from '../assets/trading_days_banner.jpg'
import MarketsLogo from '../assets/markets_thumbnail.jpg'
import HVFLogo from '../assets/BullVsBearWallpaper.jpg'

export default function Library() {
  return (
    <div className="w-full min-h-screen container mx-auto py-9 bg-transparent">
      <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-36">
        <CardGeneric title={"HVF method"} image={HVFLogo} description={"HVF method course"} />
        <CardGeneric title={"live trading days"} image={TradingDaysLogo} description={"Join Francis & the Sniper Community in a Live Session"} />
        <CardGeneric title={"stream archives"} image={MarketsLogo} description={"Watch Previous Streams"} />
      </div>
  </div>
  )
}
