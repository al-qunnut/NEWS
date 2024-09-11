import React,  {useState} from 'react'
import News from '../assets/news.jpg'
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { NavBars } from './Label';
import { Link } from 'react-router-dom'

const Footer = () => {
    const today = new Date();

    const useLinks = NavBars.map(NavBar => 
                     <li key={NavBar.id}>
                       <Link to={NavBar.to}>
                         {NavBar.name}
                       </Link>
                    </li>)

    function success (){
      alert ('You have subscribed to our newsletter!')
    }
  
    const [ email, setEmail ] = useState('');

    function handleChange (e) {
      setEmail(e.target.value);
    };

  return (
    <div className='bg-gray-900 text-white '>
      <div className="w-10/12 m-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 p-8 md:gap-8 ">
          <div className="">
            <img src={News} alt='img' className='w-[100px] my-2'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus
               exercitationem. </p>
               <div className="flex gap-8 my-4">
                <a href='https://www.facebook.com'>
                  <FaFacebook size={25}/>
                </a>
                <a href='https://www.whatsapp.com'>
                  <FaWhatsapp size={25}/>
                </a>
                <a href='https://www.linkedin.com'>
                  <FaLinkedin size={25}/>
                </a>
               </div>
          </div>
          <div className="">
            <h2 className='my-4 text-xl md:text-2xl font-semibold'>USEFUL LINKS</h2>
            <ul className='md:text-xl'>
              {useLinks}
            </ul>
          </div>
          <div className="">
            <h2 className='my-4 text-xl md:text-2xl font-semibold'>STAY UPDATED</h2>
            <p className='mb-2'>Stay updated by subscribing to our email...</p>
            <input placeholder='Email Address...'
                   name='email' 
                   className='w-full p-3 rounded-sm my-4'
                   type='email'
                   onChange={handleChange}
                   value={email} 
                   autoComplete='email'/>
            <button className='text-white bg-black p-2 w-full'
                     onClick={success}>Subcribe</button>
          </div>
        </div>
        </div>
        <div className="bg-gray-300 text-black text-center border border-t-black">
            World News. &copy; All rights reserved {today.getFullYear()}. 
        </div>
        
    </div>
  )
}

export default Footer