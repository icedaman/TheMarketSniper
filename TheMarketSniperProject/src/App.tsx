
export default function App() {
  return (
    <div className="w-full min-h-screen container mx-auto py-4 bg-yellow-300">
      <button className="px-5 py-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Save changes
      </button>
      <div className="grid grid-cols-3 gap-4 bg-green-600 mx-70 h-screen mt-4 mb-4"> 
        <div className="w-3/3 bg-indigo-700 hover:bg-sky-700">1</div>
        <div className="w-3/3 bg-indigo-700">2</div>
        <div className="w-3/3 bg-indigo-700">3</div>
        <div className="w-3/3 bg-indigo-700">4</div>
        <div className="w-3/3 bg-indigo-700 dark:md:hover:bg-fuchsia-600 ">5</div>
        <div className="w-3/3 bg-indigo-700">6</div>
        <div className="w-3/3 bg-indigo-700">7</div>
        <div className="w-3/3 bg-indigo-700">8</div>
        <div className="w-3/3 bg-indigo-700">9</div>
      </div>
    </div>
  )
}
