import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBars } from './Label'
import News from '../assets/newsIcon.png'
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const handleNavBar = NavBars.map(NavBar => 
                       <li key={NavBar.id} className='text-xl py-4 hover:font-semibold uppercase border-b md:border-none'>
                        <Link to={NavBar.to}>
                          {NavBar.name}
                        </Link>
                       </li>)

  const [open, setOpen] = useState('false');

  const openMenu = () => {
    setOpen((prev) => (!prev));
  }

  return (
    /* Desktop Navigation */
    <div className='w-11/12 m-auto text-black font-bold'>
      <div className=" hidden md:block">
       <div className="flex justify-between py-2">
        <img src={News} alt='img' className='w-[50px]'/>
        <ul className='flex gap-6'>
          {handleNavBar}
        </ul>
       </div>
      </div>

      
      <div className="md:hidden">
        <div className="flex justify-between py-2">
        <div className="">
        <img src={News} alt='img' className='w-[50px]'/>
       </div>
       <div className="">
       <button className="" onClick={openMenu}>
        {open ? (<IoClose size={35}/>) : (<LuMenu size={35}/>)}
       </button>
       {open && (
        <div className='bg-white text-black w-full absolute left-0 h-full z-10 mt-2'>
          <ul className='text-xl p-4'>
            {handleNavBar}
          </ul>
        </div>
      )}
       </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation 