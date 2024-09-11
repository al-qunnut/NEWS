import React from 'react'
import topDes1 from '../assets/topDes1.png'
import topDes2 from '../assets/topDes2.png'
import topDes3 from '../assets/topDes3.png'
import topDes4 from '../assets/topDes4.png'
import topDes5 from '../assets/topDes5.png'

const TopDestination = () => {
    const destinations =[{id: 1, src: topDes1},
                         {id: 2, src: topDes2},
                         {id: 3, src: topDes3},
                         {id: 4, src: topDes4},
                         {id: 5, src: topDes5}
    ]
    const useDestinations = destinations.map(destination => 
                            (<img key={destination.id} 
                            className='my-6 w-full' 
                            src={destination.src} 
                            alt='img'/>))
  return (
    <div className='w-10/12 m-auto'>
        <div className="my-8">
        <h2 className='text-2xl font-semibold py-2'>Top Destination</h2>
        <p className='text-gray-500'>Tick one more destoination off your bucket list with one of our most popular locations in 2024.</p>
        <div className='grid md:grid-cols-5 gap-4'>
            {useDestinations}
        </div>
        </div>
    </div>
  )
}

export default TopDestination