import React from 'react'
import TopDestination from './TopDestination'

const RealisticPhoto = () => {
    const handleClick = (e) => console.log(e);
    
  return (
    <div className='w-10/12 m-auto'>
        <div className="realistic">
            <div className="text-center text-white py-8 w-11/12 m-auto">
            <button className='bg-gray-400 rounded-md p-2'>Travel</button>
            <h2 className='text-2xl md:text-4xl font-bold py-2'>Richird Norton photorealistic rendering as real photos</h2>
            <p>Progressively incentivize cooperative systems through technically sound functionalities. 
              The credibly productivate seamless data.</p>
              <button className='bg-white text-gray-900 p-3 my-4 hover:bg-gray-700 hover:text-white font-semibold transition-colors-0.1s'
                      onClick={(e) => handleClick(e)}>
                        Start Planning Your Trip
              </button>
            </div>
        </div>
    </div>
  )
}

export default RealisticPhoto