import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import MainDashboard from './components/MainDashboard'
import Report from './components/Report'

function App() {
  

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainDashboard />} />
            <Route path='/report' element={<Report />} />
          </Routes>
        </BrowserRouter>
      </>   
  )
}

export default App
