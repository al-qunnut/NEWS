import React from 'react'
import {blogParts} from './Label.js'

const Blogs = () => {
  const blogComponents = blogParts.map
                        (blogPart => 
                        <div key={blogPart.id}>
                          <div className="m-4 shadow-md rounded-lg">
                            <img src={blogPart.img} alt='images'/>
                          <div className="p-4">
                          <h2 className='text-2xl md:text-2xl'>{blogPart.name}</h2>
                            <div className="flex gap-4">
                               <div className="">
                                 <img src={blogPart.author_img} alt='author.img' size={30}/>
                               </div>
                            <div className="">
                               <p>{blogPart.author}</p>
                               <span className='text-sm'>{blogPart.date}</span> .&nbsp;
                               <span className='text-sm'>{blogPart.shares} shares</span>
                            </div>
                            </div>
                            <p className='text-sm'>{blogPart.text}</p>
                            <button className='text-blue-500 active:opacity-5' >{blogPart.link}</button>
                          </div>
                          </div>
                        </div>
                     )

  return (
    <div className='w-10/12 m-auto'>
        <div className="grid md:grid-cols-3 my-16">
          {blogComponents}
        </div>
    </div>
  )
}

export default Blogs