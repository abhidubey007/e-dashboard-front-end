import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AddProduct, Footer, Login, Navbar, PrivateComponent, SignUp } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<h1>Product</h1>} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update' element={<h1>Update Product</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          <Route path='/logout' element={<h1>Logout</h1>} />
        </Route>

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App