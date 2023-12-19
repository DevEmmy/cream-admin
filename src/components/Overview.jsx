"use client"
import React, { useEffect, useState } from 'react'
import {
    SearchOutline,
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    EyeOutline,
    PencilAltOutline,
    TrashOutline,
    XCircleOutline,
    ChevronUp,
    ChevronDown
  } from "heroicons-react"
import Board from './Board'
import { getAdminDetails } from '@/requests/app'

const Overview = () => {


  const [data, setData] = useState([])

  const fetchData = getAdminDetails()

  useEffect(()=>{
    fetchData.then(resp => {
      console.log(resp)
      setData(resp)
    })
  }, [])

  return (
    <div>
        <p className='font-extrabold text-2xl py-2'>Overview</p>
        <div className="data grid grid-cols-3 gap-6">
            {   
                data.map((imp, i)=>{
                    return(
                        <div className='flex rounded-md flex-col bg-white shadow-md p-10 border-2 border-gray-300'>
                            <p>{imp.baseText}</p>
                            <p className='text-[40px] font-bold'>{imp.value}</p>
                        </div>
                    )
                })
            }
        </div>

        <div className='my-10'>
            <h2 className='py-6 '>Latest Users</h2>
              <Board />
        </div>
    </div>
  )
}

const EachOverview = ({value, baseText})=>{
    return (
        <div>

        </div>
    )
}

export default Overview