import Navbar from './Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Library from './pages/Library'
import LiveTradingSessions from './pages/LiveTradingSessions'
import SundaySessions from './pages/SundaySessions'
import CryptoFindings from './pages/CryptoFindings'
import ForexAndEquities from './pages/ForexAndEquities'
import StreamArchives from './pages/StreamArchives'

export default function App() {
  return (
    <div className="bg-black">
        <Navbar />
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/live-sessions' element={<LiveTradingSessions />} />
        <Route path='/sunday-sessions' element={<SundaySessions />} />
        <Route path='/forex-equities' element={<ForexAndEquities />} />
        <Route path='/crypto-findings' element={<CryptoFindings />} />
        <Route path='/stream-archives' element={<StreamArchives />} />
      </Routes>
    </div>
  )
}
