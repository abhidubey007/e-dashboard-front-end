import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Footer, Navbar, SignUp } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <h1>E-Dashboard</h1>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App