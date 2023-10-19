import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-96">
      <h1 className='text-sky-400/100 text-5xl'>Search</h1>
      <input className="border-4 py-2 px-8 mt-6 rounded-lg border-green-600" />

      <div className="flex flex-row text-sky-400/100 mt-16 mb-6 border-4 border-rose-500 text-left text-2xl">
        <div className="basis-1/4 md:basis-1/5 w-48 py-4 px-4"><p>#</p></div>
        <div className="basis-1/4 md:basis-2/5 w-48 py-4 px-4"><p>Name</p></div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4"><p>Symbol</p></div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4"><p>Price</p></div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4"><p>ATH</p></div>
      </div>

      <div className="flex flex-row text-slate-100 border-4 border-lime-500 text-left text-2xl">
        <div className="basis-1/4 md:basis-1/5 w-48 py-4 px-4"><p>6</p></div>
        <div className="basis-1/4 md:basis-2/5 w-48 py-4 px-4"><p>Cardano</p></div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4"><p>ADA</p></div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4"><p>0.28 $</p></div>
        <div className="basis-1/2 md:basis-2/5 w-48 py-4 px-4"><p>3.10 $</p></div>
      </div>

      
    </div>
  )
}

export default App
