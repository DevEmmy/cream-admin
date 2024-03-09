import React from 'react'
import Nav from './Nav'
import TopNav from './TopNav'
import Home from './Home'

const MainDashboard = () => {
  return (
    <div className='grid grid-cols-[18.8%_81.2%]'>
        <Nav />

        <div className="content">
            <TopNav />
            <Home />
        </div>
    </div>
  )
}

export default MainDashboard