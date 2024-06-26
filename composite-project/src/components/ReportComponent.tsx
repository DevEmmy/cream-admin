import React from 'react'
import { HiClock, HiHome, HiOutlineClock, HiPlus } from 'react-icons/hi2'

const ReportComponent = () => {
  return (
    <div className='bg-bg min-h-[100vh] px-[50px] py-10'>
        <div>
            <h2>Report</h2>
            <p>A report of daily, weekly and monthly activities</p>

            <div className="flex gap-3">
                <div className='bg-[#007BFF08] text-sm rounded-md flex items-center p-3 gap-1'>
                    <HiPlus className='text-primaryLight'/>
                    <p>All Report</p>
                    <p className='text-white px-3 text-[12px] flex items-center justify-center rounded-full bg-primaryLight'>10</p>
                </div>

                <div className='bg-[#E7F6EC] text-sm rounded-md flex items-center p-3 gap-1'>
                    <HiOutlineClock className='text-[#036B26]'/>
                    <p className='text-[#036B26]'>Daily Report</p>
                    <p className='text-white px-3 text-[12px] flex items-center justify-center rounded-full bg-[#036B26]'>10</p>
                </div>

                <div className='bg-[#FEF6E7] text-sm rounded-md flex items-center p-3 gap-1'>
                    <HiHome className='text-[#865503]'/>
                    <p className='text-[#865503]'>Daily Report</p>
                    <p className='text-white px-3 text-[12px] flex items-center justify-center rounded-full bg-[#865503]'>10</p>
                </div>

                <div className='bg-[#FFECE5] text-sm rounded-md flex items-center p-3 gap-1'>
                    <HiHome className='text-[#8A0000]'/>
                    <p className='text-[#8A0000]'>Daily Report</p>
                    <p className='text-white px-3 text-[12px] flex items-center justify-center rounded-full bg-[#8A0000]'>10</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReportComponent