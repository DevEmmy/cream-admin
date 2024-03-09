import React from 'react'
import { HiChartBar, HiDocument, HiHome, HiSun, HiUser } from 'react-icons/hi2'

const Home = () => {

    const overview = [
        {
            title: "Total Project",
            number: "1",
            icon: <HiHome />
        },
        {
            title: "Total Contractors",
            number: "44",
            icon: <HiUser />
        },
        {
            title: "Total Stakeholders",
            number: "3",
            icon: <HiSun />
        },
    ]

    const heads = [
        {
            title: "Project Name",
        },
        {
            title: "Amount Spent",
        },
        {
            title: "Materials",
        },
        {
            title: "Labour",
        },
        {
            title: "Tools & Machine",
        },
        {
            title: "Cash Advance",
        },
    ]

    const content = [
        {
            title: {
                name: "Bode Peters",
                number: "CPD141906"
            },
            details: [
                "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000"
            ]
        },
        {
            title: {
                name: "Bode Peters",
                number: "CPD141906"
            },
            details: [
                "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000"
            ]
        },
        {
            title: {
                name: "Bode Peters",
                number: "CPD141906"
            },
            details: [
                "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000"
            ]
        },
        {
            title: {
                name: "Bode Peters",
                number: "CPD141906"
            },
            details: [
                "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000", "₦1,000,000"
            ]
        },
    ]


    const report = [
        {
            url: "https://variety.com/wp-content/uploads/2023/06/avatar-1.jpg?w=1000&h=563&crop=1&resize=681%2C383",
            name: "Allison Ogaga",
            number: "CRN128320182"
        },
        {
            url: "https://variety.com/wp-content/uploads/2023/06/avatar-1.jpg?w=1000&h=563&crop=1&resize=681%2C383",
            name: "Allison Ogaga",
            number: "CRN128320182"
        },
        {
            url: "https://variety.com/wp-content/uploads/2023/06/avatar-1.jpg?w=1000&h=563&crop=1&resize=681%2C383",
            name: "Allison Ogaga",
            number: "CRN128320182"
        },
    ]

    return (
        <div className='bg-bg min-h-[100vh] px-[50px] py-10'>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className='text-md font-[600]'>Welcome, David</h2>
                    <p className=''>This is your dashboard, an overview of everything going on.</p>
                </div>

                <div className='text-primaryLight flex items-center justify-center px-5 py-3 text-sm gap-1 bg-white'>
                    <HiDocument />
                    View Report
                </div>
            </div>

            <div className='grid grid-cols-[3fr_1fr] mt-5 gap-3'>

                <div>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            overview.map((content, i) => {
                                return (
                                    <div className="flex items-center justify-between p-3 rounded-2xl border border-gray-300 bg-white " key={i}>
                                        <div>
                                            <p className='text-[#475367] text-sm'>{content.title}</p>
                                            <p className='text-md'>{content.number}</p>
                                            <p className='flex text-[12px] items-center text-primaryDark w-fit rounded-full bg-primaryLight'><HiChartBar />5%</p>
                                        </div>

                                        <div className='w-[40px] h-[40px] rounded-full items-center justify-center flex bg-grey text-primaryLight'>
                                            {content.icon}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className='bg-white rounded-2xl border border-gray-300 mt-3'>
                        <h1 className='p-4'>Ongoing Project</h1>

                        <div className='grid grid-cols-6 bg-bg p-4'>
                            {
                                heads.map((head, i) => {
                                    return (
                                        <div className='text-[12px]' key={i}>
                                            {head.title}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className=' bg-white p-4 grid gap-3'>
                            {
                                content.map((c, i) => {
                                    return (
                                        <div className='text-sm grid-cols-6 grid font-[400] items-center' key={i} >
                                            <div>
                                                <p className='underline text-primaryLight'>{c.title.name}</p>
                                                <p className='text-[#344054] font-[400]'>{c.title.number}</p>
                                            </div>


                                            {
                                                c.details.map((item, i) => {
                                                    return (
                                                        <div key={i}>{item}</div>
                                                    )
                                                })
                                            }

                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>


                <div className='grid gap-2'>
                    <div className='bg-white border border-gray-300 rounded-2xl p-3 h-fit'>
                        <div className='flex justify-between items-center text-sm'>
                            <div className='flex gap-2'>
                                <p>Pending Request</p>
                                <p className='text-white px-3 text-[12px] flex items-center justify-center rounded-full bg-primaryLight'>10</p>
                            </div>

                            <p className='text-primaryLight underline'>see all</p>
                        </div>

                        <div className='grid gap-3 my-3'>
                            {
                                report.map((item, i) => {
                                    return (
                                        <div key={i} className='flex justify-between items-center text-[12px]'>
                                            <div className='flex items-center gap-2'>
                                                <img src={item.url} alt="" className='w-[40px] h-[40px] rounded-full object-cover' />

                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>{item.number}</p>
                                                </div>
                                            </div>

                                            <p className='text-primaryLight cursor-pointer'>view all</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='bg-white border border-gray-300 rounded-2xl p-3 h-fit'>
                        <div className='flex justify-between items-center text-sm'>
                            <div className='flex gap-2'>
                                <p>Pending Report</p>
                                <p className='text-white px-3 text-[12px] flex items-center justify-center rounded-full bg-primaryLight'>10</p>
                            </div>

                            <p className='text-primaryLight underline'>see all</p>
                        </div>

                        <div className='grid gap-3 my-3'>
                            {
                                report.map((item, i) => {
                                    return (
                                        <div key={i} className='flex justify-between items-center text-[12px]'>
                                            <div className='flex items-center gap-2'>
                                                <img src={item.url} alt="" className='w-[40px] h-[40px] rounded-full object-cover' />

                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>{item.number}</p>
                                                </div>
                                            </div>

                                            <p className='text-primaryLight cursor-pointer'>view all</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home