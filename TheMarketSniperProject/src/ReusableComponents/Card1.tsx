
export default function Card1({ title, image, description} ) {
  return (
    <div className="transition duration-500 ease-in-out shadow-2xl hover:shadow-yellow-500 border-4 border-green-500 cursor-pointer rounded-2xl transform hover:scale-90 w-3/3 hover:shadow-[0_0_30px_green]  bg-black">    
      <h1 className='text-3xl text-green-500 text-center py-6 capitalize font-bold'>{title}</h1>   
      <img src={image} className="" />
      <h4 className='font-semibold capitalize text-white text-clip overflow-hidden text-1xl text-center px-2 py-4'>{description}</h4>
    </div>
  )
}
