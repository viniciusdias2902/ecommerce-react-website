import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'
function App() {
  return <div className='app'>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
    </AuthProvider>
  </div >
}

export default App
