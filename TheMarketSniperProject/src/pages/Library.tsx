import CardGeneric from '../ReusableComponents/CardGeneric'
import TradingDaysLogo from '../assets/trading_days_banner.jpg'
import MarketsLogo from '../assets/markets_thumbnail.jpg'
import HVFLogo from '../assets/BullVsBearWallpaper.jpg'
import { Link } from 'react-router-dom'

export default function Library() {
  return (
    <div className="w-full min-h-screen container mx-auto py-9 bg-transparent">
      <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-36">
        <Link to={"https://the-market-sniper.mykajabi.com/products/hvf-method-revealed"} className='flex'>
          <CardGeneric title={"HVF method"} image={HVFLogo} description={"HVF method course"} />
        </Link>
        <Link to={"/live-sessions"}>
          <CardGeneric title={"live trading days"} image={TradingDaysLogo} description={"Join Francis & the Sniper Community in a Live Session"} />
        </Link>
        <CardGeneric title={"stream archives"} image={MarketsLogo} description={"Watch Previous Streams"} />
      </div>
  </div>
  )
}
