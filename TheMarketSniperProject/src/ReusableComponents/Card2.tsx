import HVFLogo from '.././assets/BullVsBearWallpaper.jpg'

export default function Card2( ) {
  return (
    <div className="w-3/3 hover:shadow-[0_0_30px_green] rounded-lg duration-300 bg-gray-900">    
      <h1 className='text-3xl text-green-400 text-center py-6 capitalize font-bold'>{'HVF method'}</h1>   
      <div className='bg-gray-900'>
        <img src={HVFLogo} className='w-11/12 m-auto' />
      </div>
      <h4 className='capitalize text-white text-clip overflow-hidden text-1xl text-center px-2 py-2'>{'HVF method course'}</h4>
    </div>
  )
}
