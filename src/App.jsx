import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './components/Footer'
import TopDestination from './components/TopDestination'
import RealisticPhoto from './components/RealisticPhoto'
import Blogs from './components/Blogs'
import Search from './components/Search'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <div>
      <HomePage />
      <Search />
      <Blogs/>
      <RealisticPhoto/>
      <TopDestination />
      <Footer />
    </div>
  )
}

export default App