import TMSLogo from './assets/Web2-Logo-120TMS.png'
import TradingDaysLogo from './assets/trading_days_banner.jpg'
import MarketsLogo from './assets/markets_thumbnail.jpg'
import JobsLogo from './assets/jobs_thumbnail.jpg'
import MeetingTimeLogo from './assets/meeting_time_thumbnail.jpg'
import ReviewTimeLogo from './assets/time_for_review_thumbnail.jpg'
import BTCLogo from './assets/btc_thumbnail.jpg'
import Card1 from './ReusableComponents/Card1'

export default function App() {
  return (
    <div className="bg-black">
      <div className="w-full min-h-screen container mx-auto py-9 bg-transparent">
        <div className='w-1/4'>
          <img src={TMSLogo} height='100px' />
        </div>
        <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-10">
          <Card1 title={"live trading days"} image={TradingDaysLogo} description={"Join Francis and the Sniper Community in a Live Session"} />
          <Card1 title={"stream archives"} image={MarketsLogo} description={"Watch Previous Streams"} />
          <Card1 title={"sunday sessions"} image={MeetingTimeLogo} description={"join in our sunday market analysis session"} />
          <Card1 title={"forex and equities"} image={JobsLogo} description={"Forex and Equities focused Live Session"} />
          <Card1 title={"crypto findings"} image={BTCLogo} description={"crypto focused Live Session"} />
          <Card1 title={"post mortem"} image={ReviewTimeLogo} description={"extracting the lessons from past wins & losses"} />
        </div>
      </div>
    </div>
  )
}
