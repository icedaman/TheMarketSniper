import TradingDaysLogo from './assets/trading_days_banner.jpg'
import MarketsLogo from './assets/markets_thumbnail.jpg'
import CardGeneric from './ReusableComponents/CardGeneric'
import CardHVF from './ReusableComponents/CardHVF'
import Navbar from './Navbar/Navbar'


export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="w-full min-h-screen container mx-auto py-9 bg-transparent">
        <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-36">
          <CardHVF />
          <CardGeneric title={"live trading days"} image={TradingDaysLogo} description={"Join Francis & the Sniper Community in a Live Session"} />
          <CardGeneric title={"stream archives"} image={MarketsLogo} description={"Watch Previous Streams"} />
        </div>
      </div>
    </div>
  )
}
