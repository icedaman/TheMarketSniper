import HVFLogo from '.././assets/BullVsBearWallpaper2.jpg'

export default function CardHVF( ) {
  return (
    <div className="transition duration-500 ease-in-out shadow-2xl hover:shadow-yellow-500 bg-zinc-900 cursor-pointer rounded-2xl transform hover:scale-90 w-3/3 hover:shadow-[0_0_30px_green]">    
      <h1 className='py-20 px-8 text-4xl text-green-500 text-center capitalize font-bold'>{'HVF method'}</h1>   
      <div className=''>
        <img src={HVFLogo} className='w-full' />
      </div>
      <h4 className='pt-10 pr-8 pb-10 pl-8 font-semibold capitalize text-white text-clip overflow-hidden text-2xl text-center'>{'HVF method course'}</h4>
    </div>
  )
}
