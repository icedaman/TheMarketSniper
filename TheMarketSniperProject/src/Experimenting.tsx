import TMSLogo from './assets/Web2-Logo-120TMS.png'
import TradingDaysLogo from './assets/trading_days_banner.jpg'
import MarketsLogo from './assets/markets_thumbnail.jpg'
import JobsLogo from './assets/jobs_thumbnail.jpg'
import MeetingTimeLogo from './assets/meeting_time_thumbnail.jpg'
import ReviewTimeLogo from './assets/time_for_review_thumbnail.jpg'
import BTCLogo from './assets/btc_thumbnail.jpg'

export default function App() {
  return (
    <div className="bg-black">
      <div className="w-full min-h-screen container mx-auto py-9 bg-transparent">
        <div className='w-1/4'>
          <img src={TMSLogo} height='100px' />
        </div>
        
        <div className="grid grid-cols-3 gap-10 bg-green- h-screen mt-4 mb-4 max-h-0 mx-auto py-9"> 
          <div className="w-3/3 bg-indigo-700 hover:bg-sky-700 hover:animate-pulse">    
            <img src={TradingDaysLogo} />
          </div>
          <div className="w-3/3 bg-indigo-700 hover:bg-sky-700 hover:animate-pulse">    
            <img src={MarketsLogo} />
          </div>
          <div className="w-3/3 bg-indigo-700 hover:bg-sky-700 hover:animate-pulse">    
            <img src={JobsLogo} />
          </div>
          <div className="w-3/3 bg-indigo-700 hover:bg-sky-700 hover:animate-pulse">    
            <img src={MeetingTimeLogo} />
          </div>
          <div className="w-3/3 bg-indigo-700 hover:bg-sky-700 hover:animate-pulse">    
            <img src={BTCLogo} />
          </div>
          <div className="w-3/3 bg-indigo-700 hover:bg-sky-700 hover:animate-pulse">    
            <img src={ReviewTimeLogo} />
          </div>
        </div>
      </div>
        <div>
          <button className="px-5 py-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
            Save changes
          </button>
        </div>
    </div>
  )
}
