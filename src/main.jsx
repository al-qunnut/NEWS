import { BrowserRouter, Route, Routes  } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUs from "./Pages/AboutUs.jsx"
import BlogExternal from "./Pages/BlogExternal.jsx"
import Contact from "./Pages/Contact.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route exact path="/" Component={App}/>
        <Route exact path="/AboutUs" Component={AboutUs}/>
        <Route exact path="/BlogExternal" Component={BlogExternal}/>
        <Route exact path="/Contact" Component={Contact}/>
    </Routes>
  </BrowserRouter>
)
