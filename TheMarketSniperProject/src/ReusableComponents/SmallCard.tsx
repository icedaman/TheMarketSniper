
export default function SmallCard({ icon, title, image, description} ) {
  return (
    <div className="transition duration-500 ease-in-out shadow-2xl hover:shadow-green-500 bg-zinc-600 cursor-pointer rounded-2xl transform hover:scale-90 w-3/3 hover:shadow-[0_0_30px_green]">    
      {/* <h1 className='py-1 px-8 text-2xl  text-green-500 text-center  capitalize font-bold'> <span className="inline-block">{icon}</span> {title } </h1> */}
      <img src={image} className="w-40" />
      {/* <h4 className='text-1xl py-2 px-8 p-8 font-semibold capitalize text-clip overflow-hidden text-center text-white'>{description}</h4> */}
    </div>
  )
}


