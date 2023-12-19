"use client"
import { Search } from 'heroicons-react'
import React from 'react'
import Card from './Card'

const Listings = () => {

    const listings = [
        {
            postedBy: {
                firstName: "Emmanuel",
                lastName: "Olaosebikan",
                profilePicture: "https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296",
            },
            images: ["https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1296"],
            title: "Odun wire wire",
            price: "200000",
            location: "Ajah, Lagos",
            _id: "NSOD9WE89D"
        }
    ]
  return (
    <div>
        <div className="flex gap-2 border-2 border-gray-300 w-2/5 rounded-lg py-3 px-2">
            <Search className='text-gray-300'/>
            <input type="text" placeholder='Search by user' className='w-full focus:outline-none'/>
        </div>

        <div className='grid grid-cols-3 gap-6 my-6'>
            {
                [1,1,1,1,1].map((listing, i)=>{
                    return (
                        <Card key={i} listing={listings[0]}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Listings