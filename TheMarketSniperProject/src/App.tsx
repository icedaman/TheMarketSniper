import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import  Tabs  from './ReusableComponents/Tabs'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  )
}
