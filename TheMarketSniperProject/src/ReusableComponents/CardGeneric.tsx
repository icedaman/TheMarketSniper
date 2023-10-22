
export default function CardGeneric({ title, image, description} ) {
  return (
    <div className="transition duration-500 ease-in-out shadow-2xl hover:shadow-yellow-500 border-4 border-green-500 cursor-pointer rounded-2xl transform hover:scale-90 w-3/3 hover:shadow-[0_0_30px_green]  bg-black">    
      <h1 className='py-20 px-8 text-4xl  text-green-500 text-center  capitalize font-bold'>{title}</h1>   
      <img src={image} className="" />
      <h4 className='text-2xl py-20 px-8 p-8 font-semibold capitalize text-clip overflow-hidden text-center text-white'>{description}</h4>
    </div>
  )
}
