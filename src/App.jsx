import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import Video from '../src/pages/Video/Video'

const App = () => {

const[sidebar,setsidebar]=useState(true)

  return (
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/> 
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
