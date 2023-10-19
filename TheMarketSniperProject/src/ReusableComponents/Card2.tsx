import HVFLogo from '.././assets/TMS_logo.webp'

export default function Card2( ) {
  return (
    <div className="w-3/3 hover:shadow-[0_0_30px_green] rounded-lg duration-300 bg-gray-900">    
      <h1 className='text-3xl text-green-400 text-center py-6 capitalize font-bold'>{'HVF method course'}</h1>   
      <div className='bg-white'>
        <img src={HVFLogo} className='w-3/5 m-auto bg-white' />
      </div>
      <h4 className='capitalize text-white text-clip overflow-hidden text-1xl text-center px-2 py-4'>{'description here'}</h4>
    </div>
  )
}
