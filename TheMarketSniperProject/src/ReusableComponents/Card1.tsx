
export default function Card1({ title, image, description} ) {
  return (
    <div className="w-3/3 hover:shadow-[0_0_30px_green] rounded-lg duration-300 bg-gray-900">    
      <h1 className='text-3xl text-green-400 text-center py-6 capitalize font-bold'>{title}</h1>   
      <img src={image} />
      <h4 className='capitalize text-white text-clip overflow-hidden text-1xl text-center px-2 py-4'>{description}</h4>
    </div>
  )
}
