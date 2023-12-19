"use client";
import React, { useState } from 'react'
import Overview from './Overview';
import Users from './Users';
import Listings from './Listings';

const Nav = ({setComponent}) => {

    const [active, setActive] = useState(0)

    const nav = [
        {
            title: "Overview",
            component: <Overview />
        },
        {
            title: "Users",
            component: <Users />
        },
        {
            title: "Listings",
            component: <Listings />
        },
        {
            title: "Requests"
        },
        {
            title: "Blogs"
        }
    ]

  return (
    <div className='fixed w-1/5 top-0 left-0 bottom-0 border-r-2 border-gray-200 flex gap-10 p-8 flex-col'>
        <div className='text-lg font-extrabold'>Cream</div>

        <div className='flex flex-col gap-6'>
            {
                nav.map((item, i)=>{
                    return(
                        <div key={i} className={`cursor-pointer p-3 rounded-lg ${active === i && "bg-black text-white font-bold"}`} onClick={()=> {setComponent(item.component); setActive(i)}}>
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Nav