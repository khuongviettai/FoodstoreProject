import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/pages/Navbar/Navbar';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Home from './components/pages/Home/Home';
import Footer from './components/pages/Footer/Footer';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Products from './components/products/Products/Products';
import { CartProvider } from 'react-use-cart';
import Cart from './components/products/Cart/Cart';
import SingleProduct from './components/products/SingleProduct/SingleProduct';
import Checkout from './components/pages/Checkout/Checkout';




function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element = { <Home />} />
          <Route path="/login" element = { <Login />} />
          <Route path="/register" element = { <Register />} />
          <Route path='/about' element = { <About />} />
          <Route path='/contact' element = { <Contact />} />
          <Route path='/products' element = { <Products />} />
          <Route path='/cart' element = { <Cart />} />
          <Route path='/products/:id' element = { <SingleProduct />} />
          <Route path='/checkout' element = { <Checkout />} />
          
        </Routes>
        </CartProvider>
      <Footer />
    </Router>

  );
}

export default App;
