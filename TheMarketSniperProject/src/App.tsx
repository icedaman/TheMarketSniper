import TradingDaysLogo from './assets/trading_days_banner.jpg'
import MarketsLogo from './assets/markets_thumbnail.jpg'
import JobsLogo from './assets/jobs_thumbnail.jpg'
import MeetingTimeLogo from './assets/meeting_time_thumbnail.jpg'
import ReviewTimeLogo from './assets/time_for_review_thumbnail.jpg'
import BTCLogo from './assets/btc_thumbnail.jpg'
import Card1 from './ReusableComponents/Card1'
import Card2 from './ReusableComponents/Card2'
import Navbar from './Navbar/Navbar'


export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="w-full min-h-screen container mx-auto py-9 bg-transparent">
        <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-40">
          <Card2 />
          <Card1 title={"live trading days"} image={TradingDaysLogo} description={"Join Francis & the Sniper Community in a Live Session"} />
          <Card1 title={"stream archives"} image={MarketsLogo} description={"Watch Previous Streams"} />
          {/* <Card1 title={"sunday sessions"} image={MeetingTimeLogo} description={"join in our sunday market analysis session"} />
          <Card1 title={"forex and equities"} image={JobsLogo} description={"Forex and Equities focused Live Session"} />
          <Card1 title={"crypto findings"} image={BTCLogo} description={"crypto focused Live Session"} />
          <Card1 title={"post mortem"} image={ReviewTimeLogo} description={"extracting the lessons from past wins & losses"} /> */}
        </div>
      </div>
    </div>
  )
}
