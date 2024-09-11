import React from 'react'
import Footer from '../components/Footer'
import Blogs from '../components/Blogs'
import Navigation from '../components/Navigation'

const BlogExternal = () => {
  return (
    <div>
      <Navigation />
      <div className="w-10/12 m-auto">
        <h1 className='text-3xl text-center font-bold my-4'>Blogs</h1>
        <p className='text-sm text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet cum sapiente alias 
          asperiores illum vitae dolorum eveniet autem aliquam suscipit impedit consectetur atque, cumque
           saepe culpa nisi. Aspernatur, assumenda. Lorem dolor sit amet consectetur adipisicing elit. Dicta
           dignissimos minima explicabo blanditiis ill aliquid dolores! </p>
      </div>
      <Blogs />
      <Footer />
    </div>
  )
}

export default BlogExternal