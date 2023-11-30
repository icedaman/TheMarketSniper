import { Link } from 'react-router-dom'
import Video from '../ReusableComponents/Video'
import TMSLogo from '../assets/Web2-Logo-120TMS.png'
import TradingDaysLogo from '../assets/trading_days_banner.jpg'
import MarketsLogo from '../assets/markets_thumbnail.jpg'
import HVFLogo from '../assets/BullVsBearWallpaper.jpg'
import MainLogo from '../assets/main-logo.png'
import SmallCard from '../ReusableComponents/SmallCard'
import { TrophyIcon, AcademicCapIcon, UsersIcon, LockClosedIcon, LockOpenIcon, ChartBarSquareIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Navbar from '../Navbar/Navbar'
import Tabs from '../ReusableComponents/Tabs'
import FrancisDetails from './FrancisDetails'
import FeaturedInLogo from '../assets/featuredIn.png'


export default function LandingPage() {
  return (
    <>
      <div className="bg-zinc-300 opacity-90 w-full h-screen relative">
        <Video />
        <nav className='py-10 pr-10 pl-10 left-0 top-0 -z-50 flex w-full justify-between items-center transition-all ease-in-out duration-500'>
          <img
              className="h-24 cursor-pointer"
              src={TMSLogo}
              alt="The Market Sniper"
            />
          <div className=''>
            <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Blog</a>
            <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Press Mentions</a>
            <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Contact Us</a>
            <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Terms of Service</a>
            <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Privacy Policy</a>
          </div>
        </nav>
        <section className='px-36 pt-20 text-center'>
            <h1 className='h-fit py-4 text-5xl overflow text-green-500 drop-shadow-lg shadow-black w-full '>
              Everything You Need To Become A Successful Lifestyle Trader
            </h1>
            <h5 className='h-fit py-10 pt-2 text-xl overflow text-white drop-shadow-lg shadow-black w-full text-center '>
              Have More Freedom – Trade Confidently – Increase Your Income
            </h5>
            <h5 className='h-fit pt-32 pb-6 text-lg overflow text-white drop-shadow-lg shadow-black w-full text-center '>
            For Traders By Traders!      This is how we can help you today:
            </h5>
        </section>
        
        <div className='w-1/2 mx-auto my-4 flex text-center'>
          <div className='w-1/2 mr-20 rounded-lg'>
            <button className='relative  bg-zinc-700 my-5 text-white text-center w-72 h-14 rounded-3xl shadow-zinc-900  hover:shadow-lg hover:transition duration-500 ease-in-out shadow-2xl hover:shadow-zinc-900 hover:bg-zinc-600 hover:w-80 text-lg hover:text-xl '>
              <p className=' mr-5'>Free Trading Course</p> <ChartBarSquareIcon aria-hidden="true"className="h-8 cursor-pointer absolute top-3 right-4" />
            </button>
          </div>
          <div className='w-1/2 rounded-lg'>
            <button className='relative  bg-zinc-700 my-5 text-white text-center w-72 h-14 rounded-3xl shadow-zinc-900  hover:shadow-lg hover:transition duration-500 ease-in-out shadow-2xl hover:shadow-zinc-900 hover:bg-zinc-600 hover:w-80 text-xl hover:text-2xl '>
              <p className=' mr-5'>Results</p> <TrophyIcon aria-hidden="true"className="h-8 cursor-pointer absolute top-3 right-12" />
            </button>
          </div>
        </div>
        <div className='  w-1/4 mx-auto my-4 text-center'>
          <button className='relative bg-green-500 my-5 text-white text-center w-72 h-14 rounded-3xl shadow-green-900  hover:shadow-lg hover:transition duration-500 ease-in-out shadow-2xl hover:shadow-green-900 hover:bg-green-600 hover:w-80 text-lg hover:text-xl '>
            <p className=' mr-5'>Book a Free Call</p> <PhoneIcon aria-hidden="true"className="h-8 cursor-pointer absolute top-3 right-7" />
          </button>
        </div>
      </div>  

      <FrancisDetails />

      <Tabs />
      
      <div className='text-center w-full mb-20'>
        <button className='relative bg-green-500 my-5 text-white text-center w-80 h-16 rounded-3xl shadow-green-900  hover:shadow-lg hover:transition duration-500 ease-in-out shadow-2xl hover:shadow-green-900 hover:bg-green-600 hover:w-96 text-lg hover:text-xl '>
          <p className=' mr-5'>Book a Free Call</p> <PhoneIcon aria-hidden="true"className="h-8 cursor-pointer absolute top-4 right-9" />
        </button>
      </div>
      
    <div className='w-2/3 mx-auto py-2 bg-zinc-300'>
      <img src={FeaturedInLogo} />
    </div>
    
      
    <div className='w-full mx-auto py-6 bg-zinc-900 text-center'>
      <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Blog</a>
      <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Press Mentions</a>
      <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Contact Us</a>
      <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Terms of Service</a>
      <a className='text-zinc-300 font-semibold transition-all ease-in-out hover:border-b-4 px-7 text-lg hover:text-xl' href='#'>Privacy Policy</a>
    </div>

 
     



      {/* <div className=' text-5xl overflow text-green-500 drop-shadow-lg shadow-black w-fit text-center'>
        <h1 className='h-fit text-5xl overflow text-green-500 drop-shadow-lg shadow-black w-full '>
          Everything You Need To Become A Successful Lifestyle Trader
        </h1>
        <h5 className='h-fit text-xl overflow text-white drop-shadow-lg shadow-black w-full text-center pt-2'>
          Have More Freedom – Trade Confidently – Increase Your Income
        </h5>
      </div>

      <div className='text-center w-full '>
        <button className='bg-green-500 my-5 text-white text-center w-80 h-16 rounded-2xl shadow-green-900  hover:shadow-lg hover:transition duration-500 ease-in-out shadow-2xl hover:shadow-green-900 hover:bg-green-600 hover:w-96 text-lg hover:text-xl '>
          Book a Call
        </button>
      </div>

      <div className='px-10 w-full'>
        <div className="grid grid-cols-5 gap-3 mt-40 mb-4 mr-6 top-56 w-1/2">
          <Link to={"/stream-archives"}>
            <SmallCard icon={<AcademicCapIcon aria-hidden="true" />} title={"Free Trading Course"} image={StateOfMarketLogo} description={"HVF method course"} />
          </Link>
          <Link to={"/stream-archives"}>
            <SmallCard icon={<AcademicCapIcon aria-hidden="true" />} title={"Free Trading Course"} image={OptEntryLogo} description={"HVF method course"} />
          </Link>
          <Link to={"/stream-archives"}>
            <SmallCard icon={<AcademicCapIcon aria-hidden="true" />} title={"Free Trading Course"} image={MinLossLogo} description={"HVF method course"} />
          </Link>
          <Link to={"/live-sessions"}>
            <SmallCard icon={<UsersIcon aria-hidden="true" />} title={"live trading days"} image={TakeProfitLogo} description={"Join Francis & the Sniper Community in a Live Session"} />
          </Link>
          <Link to={"/stream-archives"}>
            <SmallCard icon={<TrophyIcon aria-hidden="true" />} title={"results"} image={MaxRRRLogo} description={"Watch Previous Streams"} />
          </Link>
        </div>
      </div>         */}
        
    </>
  )
}




//    <div className="w-full min-h-screen container mx-auto py-9"> 
//       {/* <div className="grid grid-cols-3 gap-10  mt-4 mb-4 mx-auto py-36"> </div>*/}
