import React from 'react'
import Overview from './Overview'
import Users from './Users'
import Listings from './Listings'

const Main = ({component}) => {
  return (
    <div className='p-5'>
        {component}
    </div>
  )
}

export default Main