import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AddProduct, Footer, Login, Navbar, PrivateComponent, ProductList, SignUp, UpdateProduct } from './components'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<ProductList />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/update/:id' element={<UpdateProduct />} />
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