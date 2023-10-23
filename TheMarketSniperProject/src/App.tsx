import Navbar from './Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Library from './pages/Library'
import LiveTradingSessions from './pages/LiveTradingSessions'

export default function App() {
  return (
    <div className="bg-black">
        <Navbar />
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/live-sessions' element={<LiveTradingSessions />} />
      </Routes>
    </div>
  )
}
