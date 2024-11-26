import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
     
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
        </Routes>
      </div>
    </div>
  )
}

export default App