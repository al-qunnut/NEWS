import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CiClock2 } from "react-icons/ci";
import { FaQuoteRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
        <div className="About mb-12 text-white">
           <Navigation />
           <div className="m-auto w-10/12 AboutText">
           <h1 className='text-2xl md:text-3xl font-bold my-1'>5 Efficient Rules How to Organize Your Working Place</h1>
           <p className='text-xl md:text-2xl'>Relationship tips couples therapists are giving all the time.</p>
           <div className="flex gap-2 text-sm">
            <span>
              by Joanna Wellick
            </span>
            <span>
              -
            </span>
            <div className="flex gap-2">
              <span className='mt-1'>
                <CiClock2 />
              </span>
              <span>
                2 minute read
              </span>
            </div>
           </div>
           </div>
        </div>

        <div className="w-10/12 m-auto">
        <div className="grid sm-grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className='text-sm'>
              Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front 
              liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full 
              button detail cotton blend cute functional. Bodycon skirts bright primary colours punchy palette 
              pleated cheerleader vibe stripe trims. Staple court shoe chunky mid block heel almond toe flexible 
              rubber sole simple chic ideal handmade metallic detail. Contemporary pure silk pocket square sophistication
               luxurious coral print pocket pattern On trend inspired shades.
            </p>

              <div className="flex gap-2 my-2">
                  <span className='mt-2'>
                    <FaQuoteRight size={35}/>
                  </span>
                  <h2 className='text-xl md:text-2xl font-semibold'>
                    Knicker lining concealed back zip fasten swing style high waisted double
                     layer full pattern floral.
                  </h2>
              </div>

              <div className='text-sm my-3'>
                <p>
                  Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe.
                  Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. 
                </p>
                <br/>
                <p>
                 Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike
                 design Eget aenean tellus venenatis. Donec odio tempus. 
                </p>
              </div>

              <div className="">
                <h2 className='text-xl my-2 font-semibold'>
                  Eu ridiculus fringilla aenean
                </h2>
                <p className=''>
                  Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. 
                  Nec vitae eros ultext-smlamcorper laoreet dapibus mus ac ante viverra. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.
                </p>
                  <ul className='list-disc m-2 text-sm pl-8'>
                    <li>Crisp fresh iconic elegant timeless clean perfume</li>
                     <li> Neck straight sharp silhouette and dart detail </li>
                     <li> Machine wash cold slim fit premium stretch selvedge denim comfortable low waist</li>
                  </ul>
                <p className='text-sm my-2'>
                  See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. 
                  Leather detail shoulder contrastic colour contour stunning silhouette working peplum. 
                  Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline 
                  stitching cropped jacket.
                </p>
              </div>

              <button className='bg-black text-white w-full p-2 font-semibold my-8'>
                View Comments
              </button>

              <div className="">
                <h1 className='uppercase font-bold text-3xl md:text-4xl'>
                  Sign Up To Our Newsletter
                </h1>
                <h3 className='uppercase font-semibold text-xl md:text-2xl text-gray-500'>
                  Get notified of the best deals on our WordPress themes.
                </h3>
                <div className="grid md:grid-cols-3 my-4 gap-6">
                  <input type='text' className='p-2 rounded-sm border' placeholder='Enter your name...'/>
                  <input type='email' className='p-2 rounded-sm border' placeholder='Enter your email...'/>
                  <button className='bg-black text-white uppercase font-semibold px-4 py-2'>
                    subscribe
                  </button>
                  </div>
                  <div className="flex gap-2 my-4 mb-8">
                  <input type='checkbox'/>
                  <span className='text-xs text-gray-400'>
                    By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
                  </span>
                </div>
              </div>
          </div>



          <div className="">
           <div className="bg-gray-50 p-4 mb-8">
            <h1 className='text-xl font-semibold'>Follow Us</h1>
            <div className="flex justify-between my-8">
              <FaFacebookSquare />
              <FaSquareTwitter />
              <IoLogoPinterest />
              <FaInstagramSquare />
              <FaYoutube />
            </div>
            <p>
               <span className='font-bold'>Subscription</span>&nbsp;Subscribe to our newsletter and receive a selection of cool articles every weeks
            </p>
            <div className='flex flex-col'>
              <input type='email' name="email" className='p-2 shadow-sm my-2 rounded-md' placeholder='Enter your email'/>
              <button className='bg-black text-white w-full p-2 mb-2 rounded-md'>Subcribe</button>
              <div className='flex gap-2'>
              <input type='checkbox'/>
              <label className='text-xs text-gray-500 my-4 '>By checking this box, you confirm that you have read and are agreeing to our terms of 
                use regarding the storage of the data submitted through this form.</label>
              </div>
            </div>
           </div>
           <div className="my-6">
                <h1 className='text-2xl font-semibold my-2'>The Latest</h1>
                <div className="">
                  <div className="Latest p-4 text-white text-sm shadow-md my-2">
                    <h2 className='my-2'>  
                      10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships
                    </h2>
                    <div className="flex text-xs gap-2">
                      <span>June 21, 2024</span> 
                      <span>-</span> 
                      <span className='flex gap-1'>
                        <CiClock2 className='mt-1'/>
                        12 min read
                      </span> 
                    </div>
                    </div>

                  <div className="p-4 shadow-md text-sm">
                    <h2 className='my-2'>  
                      10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships
                    </h2>
                    <div className="flex text-xs gap-2">
                      <span>June 21, 2024</span> 
                      <span>-</span> 
                      <span className='flex gap-1'>
                        <CiClock2 className='mt-1'/>
                        12 min read
                      </span> 
                    </div>
                    </div>

                  <div className="p-4 shadow-md text-sm">
                    <h2 className='my-2'>  
                      10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships
                    </h2>
                    <div className="flex text-xs gap-2">
                      <span>June 21, 2024</span> 
                      <span>-</span> 
                      <span className='flex gap-1'>
                        <CiClock2 className='mt-1'/>
                        12 min read
                      </span> 
                    </div>
                    </div>

                  <div className=" p-4 shadow-md text-sm">
                    <h2 className='my-2'>  
                      10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships
                    </h2>
                    <div className="flex text-xs gap-2">
                      <span>June 21, 2024</span> 
                      <span>-</span> 
                      <span className='flex gap-1'>
                        <CiClock2 className='mt-1'/>
                        12 min read
                      </span> 
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default AboutUs