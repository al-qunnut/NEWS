import React from 'react'
import { Navigate } from 'react-router-dom'
import Navigation from './Navigation'

const HomePage = () => {
    const handleClick = () => {
        console.log(HomePage)
    }
  return (
    <div className='Home'>
      <Navigation />
        <div className="text-white text-center ">
           <div className="HomeText">
             <h1 className='text-3xl md:text-5xl font-semibold '>Inspiration for travel by real people</h1>
             <p className='text-xl'>Book smart, travel simple.</p>
             <button type="button" 
                     className='my-4 p-3 bg-white text-black shadow-sm active:bg-gray-400'
                     onClick={handleClick}>
                        Start planning your trip
            </button>
           </div>
        </div>
    </div>
  )
}

export default HomePage