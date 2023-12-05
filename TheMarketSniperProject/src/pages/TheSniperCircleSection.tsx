import MainLogo from '../assets/the-sniper-circle.png'

export default function TheSniperCircleSection() {
  return (
    <div className="w-full text-center my-10 bg-zinc-300 py-10">
      <h1 className='h-fit py-4 text-5xl font-semibold overflow text-green-500 drop-shadow-lg shadow-black w-full [text-shadow:1px_1px_3px_#000]'>
        For Traders By Traders!
      </h1>
      <div className="text-center my-4">
        <section className='px-36'>
          <h5 className='h-fit py-10 pt-2 text-xl overflow text-zinc-700 drop-shadow-lg shadow-black w-full text-center [text-shadow:1px_1px_2px_#000]'>
            Join our community – a global network of motivated and focused individuals on a journey to becoming self-reliant lifestyle traders.
          </h5>
          <div className="text-center flex justify-center pb-4">
            <img className='h-24' src={MainLogo}/>
          </div>   
          <h5 className='h-fit py-4 text-base overflow text-zinc-900 drop-shadow-lg shadow-black w-full text-center'>
            No matter where you are in your trading journey, our robust community of traders will welcome you in and give you support, ideas, awareness, and accountability.
          </h5>
        </section>
        <div className="aspect-w-16 aspect-h-5 mx-96 my-10">
          <iframe src="https://www.youtube.com/embed/9c_yqhKzfxE?feature=oembed" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className=' mx-72 pt-2'>
          <h5 className='text-lg overflow font-semibold text-zinc-200 leading-7 bg-zinc-400 rounded-xl p-4'>
            <p className='mb-2'>Our unique community is comprised of people from all over the world, all at different points of their trading journey.</p>
            <p className='mb-2'>Ranging from complete beginners to many highly trained and focused traders, The Market Sniper community is a rich place where traders interact 24/7/365.</p>
            <p className='mb-2'>The traders in the community bring varying experiences and background histories, yet all implement the same powerful trading strategy – the Hunt Volatility Funnel Method.</p>
            <p className='mb-2'>This is an immensely powerful asset! Inside the exclusive  Sniper Circle platform, our members are able to share ideas, analyze trades together, get instant feedback, receive daily updates on different markets, attend regular educational webinars, be held accountable for trading decisions, challenge each other to greatness, and encourage one another in the (often lonely) world of trading financial markets.</p>
          </h5>
        </div>
      </div>
    </div>
  )
}
