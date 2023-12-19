"use client"
import { FilterOutline, Search } from 'heroicons-react'
import React, { useEffect, useState } from 'react'
import Board from './Board'
import { getListOfUsers } from '@/requests/app'

const Users = () => {

  return (
    <div>
        <div className="flex gap-2 border-2 border-gray-300 w-2/5 rounded-lg py-3 px-2">
            <Search className='text-gray-300'/>
            <input type="text" placeholder='Search for user' className='w-full focus:outline-none'/>
        </div>

        <div className='mt-10 flex gap-2 border-2 border-gray-300 w-1/5 rounded-lg py-3 px-2'>
            <FilterOutline className='text-gray-300'/>
            <select name="yser-type" id="" className='w-full focus:outline-none bg-transparent cursor-pointer'>
                <option value="All">All</option>
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
            </select>
        </div>

        <div className='my-3'>
          <Board/>
        </div>
      
    </div>
  )
}

export default Users