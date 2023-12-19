"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import Main from './Main'
import Overview from './Overview'

const Dashboard = () => {

  const [component, setComponent] = useState(<Overview />)
  return (
    <div className='flex gap-24 bg-gray-50 h-[100vh]'>
        <div className='w-1/5 bg-white'>
            <Nav setComponent={setComponent}/>
        </div>
        


        <div className='w-4/5 mt-14 bg-white min-h-[80vh]'>
           <Main component={component}/> 
        </div>
        
    </div>
  )
}

export default Dashboard