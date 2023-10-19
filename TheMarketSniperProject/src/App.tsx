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
        
        <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-10">

          <div className="h-fit	 w-3/3 hover:animate-pulse bg-green- p-3"> 
            <h1 className='text-4xl text-green-400 text-center py-4 capitalize font-bold'>Live Trading days</h1>   
            <img src={TradingDaysLogo} />
            <h4 className='capitalize text-white text-clip overflow-hidden text-2xl text-center py-4'> Join Francis and the Sniper Community in a Live Session</h4>
          </div>
          <div className="w-3/3 hover:animate-pulse">    
            <h1 className='text-4xl text-green-400 text-center py-4 capitalize font-bold'>stream archives</h1>   
            <img src={MarketsLogo} />
            <h4 className='capitalize text-white text-clip overflow-hidden text-2xl text-center py-4'>Watch Previous Streams </h4>
          </div>
          <div className="w-3/3 hover:animate-pulse">    
            <h1 className='text-4xl text-green-400 text-center py-4 capitalize font-bold'>sunday sessions</h1>   
            <img src={MeetingTimeLogo} />
            <h4 className='capitalize text-white text-clip overflow-hidden text-2xl text-center py-4'>join in our sunday market analysis session </h4>
          </div>
          <div className="w-3/3 hover:animate-pulse">    
            <h1 className='text-4xl text-green-400 text-center py-4 capitalize font-bold'>forex and equities</h1>   
            <img src={JobsLogo} />
            <h4 className='capitalize text-white text-clip overflow-hidden text-2xl text-center py-4'>Forex and Equities focused Live Session</h4>
          </div>
          <div className="w-3/3 hover:animate-pulse">    
            <h1 className='text-4xl text-green-400 text-center py-4 capitalize font-bold'>crypto findings</h1>   
            <img src={BTCLogo} />
            <h4 className='capitalize text-white text-clip overflow-hidden text-2xl text-center py-4'>crypto focused Live Session </h4>
          </div>
          <div className="w-3/3 hover:animate-pulse">    
            <h1 className='text-4xl text-green-400 text-center py-4 capitalize font-bold'>post mortem</h1>   
            <img src={ReviewTimeLogo} />
            <h4 className='capitalize text-white text-clip overflow-hidden text-2xl text-center py-4'>extracting the lessons from past wins & losses </h4>
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
