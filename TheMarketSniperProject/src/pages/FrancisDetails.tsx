import FrancisCard from './FrancisCard'
import { useInView } from 'react-intersection-observer';
import { cn } from '../utilities/passingCssPropsasObj';


export default function FrancisDetails() {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={cn(
      "px-10 py-10 w-full bg-zinc-300",
      inView && "animate-fade"
    )}>
      <section className='px-36 pb-10 text-center'>
        <h1 className='h-fit py-4 text-5xl overflow text-green-500 drop-shadow-lg shadow-black w-full [text-shadow:1px_1px_2px_#000] font-semibold'>
          Meet Francis Hunt – Trader, Technical Analyst & Teacher
        </h1>
        <h5 className='h-fit py-10 pt-2 text-xl overflow text-zinc-700 drop-shadow-lg shadow-black w-full text-center [text-shadow:1px_1px_1px_#000]'>
          …and originator of the Hunt Volatility Funnel Trading Method
        </h5>
      </section>
      <FrancisCard />

      <div className="mx-60 ">

        <h5 className='py-8 my-20 text-xl overflow text-green-800 drop-shadow-lg shadow-black w-full text-center bg-white rounded-2xl p-3'>
          Learn more about Francis' Mindset and Strategies to approach the Markets in this interview series for the UKspreadbetting Youtube Channel
        </h5>
        <div className="aspect-w-16 aspect-h-6 mx-48 my-10">
          <iframe src="https://www.youtube.com/embed/watch?v=jM_fx-JTdpY&list=PLnSelbHUB6GT9L_TanRe_sya0CV5_QHW-&ab_channel=UKspreadbetting" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      {/* <h5 className='py-1 text-2xl overflow text-green-800 drop-shadow-lg shadow-black w-full text-center bg-white rounded-2xl h-full justify-center flex align-middle pt-6'>
          AKA: <span className='text-green-400 inline ml-2 [text-shadow:1px_1px_1px_#000]'>The Market Sniper</span> <span className='text-green-400 inline [text-shadow:1px_1px_1px_#000]'>, The Crypto Sniper</span> <span className='text-green-400 inline [text-shadow:1px_1px_1px_#000]'>, The Reset Sniper</span>
        </h5> */}
      {/* <div className="transition duration-500 ease-in-out shadow-2xl hover:shadow-green-500 rounded-2xl transform hover:scale-60 w-3/3 hover:shadow-[0_0_30px_green]">
        <h5 className='h-fit py-10 pt-2 text-xl overflow text-green-800 drop-shadow-lg shadow-black w-full text-center '>
          <span className='text-2xl font-semibold from-stone-600'>Francis Hunt</span> - The Creator of the Hunt Volatility Funnel (HVF)
        </h5>
        <img
            className="rounded-2xl"
            src={FrancisImg}
            alt="The Market Sniper"
          />
      </div> */}
    </div>
  )
}
