import { Link } from 'react-router-dom'
import Video from '../ReusableComponents/Video'
import TMSLogo from '../assets/Web2-Logo-120TMS.png'
import TradingDaysLogo from '../assets/trading_days_banner.jpg'
import MarketsLogo from '../assets/markets_thumbnail.jpg'
import HVFLogo from '../assets/BullVsBearWallpaper.jpg'
import StateOfMarketLogo from '../assets/state-of-market.png'
import SmallCard from '../ReusableComponents/SmallCard'
import { TrophyIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline'


export default function LandingPage() {
  return (
      <div className="w-full h-screen bg-zinc-300 relative opacity-90">
        <img
          className="absolute top-10 left-10 h-24 cursor-pointer"
          src={TMSLogo}
          alt="The Market Sniper"
        />
        <Video />
        <div className='absolute top-40 inset-x-1/4 h-fit text-5xl overflow text-green-500 drop-shadow-lg shadow-black w-fit text-center'>
          <h1 className='h-fit text-5xl overflow text-green-500 drop-shadow-lg shadow-black w-full '>
            Everything You Need To Become A Successful Lifestyle Trader
          </h1>
          <h5 className='h-fit text-xl overflow text-white drop-shadow-lg shadow-black w-full text-center pt-2'>
            Have More Freedom – Trade Confidently – Increase Your Income
          </h5>
        </div>

        <div className='px-10'>
          <div className="absolute grid grid-cols-3 gap-3 mt-40 mb-4 mr-6 top-56">
            <Link to={"/stream-archives"} className='flex'>
              <SmallCard icon={<AcademicCapIcon className="block h-6 w-6" aria-hidden="true" />} title={"Free Trading Course"} image={HVFLogo} description={"HVF method course"} />
            </Link>
            <Link to={"/live-sessions"}>
              <SmallCard icon={<UsersIcon className="block h-6 w-6" aria-hidden="true" />} title={"live trading days"} image={TradingDaysLogo} description={"Join Francis & the Sniper Community in a Live Session"} />
            </Link>
            <Link to={"/stream-archives"}>
              <SmallCard icon={<TrophyIcon className="block h-6 w-6" aria-hidden="true" />} title={"results"} image={MarketsLogo} description={"Watch Previous Streams"} />
            </Link>
          </div>
        </div>

        
      </div>
  )
}




//    <div className="w-full min-h-screen container mx-auto py-9"> 
//       {/* <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-36"> </div>*/}
