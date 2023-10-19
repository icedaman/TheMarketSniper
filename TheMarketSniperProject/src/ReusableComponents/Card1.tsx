
export default function Card1({ title, image, description} ) {
  return (
    <div className="h-fit w-3/3 hover:animate-pulse">    
    <h1 className='text-4xl text-green-400 text-center py-4 capitalize font-bold'>{title}</h1>   
    <img src={image} />
    <h4 className='capitalize text-white text-clip overflow-hidden text-2xl text-center px-2 py-4'>{description}</h4>
  </div>
  )
}
