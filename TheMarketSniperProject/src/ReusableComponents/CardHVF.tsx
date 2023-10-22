import HVFLogo from '.././assets/BullVsBearWallpaper.jpg'

export default function CardHVF( ) {
  return (
    <div className="transition duration-500 ease-in-out shadow-2xl hover:shadow-yellow-500 border-4 border-green-500 cursor-pointer rounded-2xl transform hover:scale-90 w-3/3 hover:shadow-[0_0_30px_green]  bg-black">    
      <h1 className='py-20 px-8 text-4xl text-green-500 text-center capitalize font-bold'>{'HVF method'}</h1>   
      <div className=''>
        <img src={HVFLogo} className='w-11/12 m-auto' />
      </div>
      <h4 className='pt-16 pr-8 pb-20 pl-8 font-semibold capitalize text-white text-clip overflow-hidden text-2xl text-center'>{'HVF method course'}</h4>
    </div>
  )
}