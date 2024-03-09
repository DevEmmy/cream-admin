import React from 'react'
import Nav from './Nav'
import TopNav from './TopNav'
import ReportComponent from './ReportComponent'

const Report = () => {
  return (
    <div className='grid grid-cols-[18.8%_81.2%]'>
        <Nav />

        <div className="content">
            <TopNav />
            <ReportComponent />
        </div>
    </div>
  )
}

export default Report