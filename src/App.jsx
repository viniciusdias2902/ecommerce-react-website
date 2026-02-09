import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import AuthProvider from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import ProductDetails from './components/ProductDetails'
function App() {
  return <div className='app'>
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  </div >
}

export default App
