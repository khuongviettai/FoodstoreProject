import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Order from "./pages/order/Order";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Navbar from "./pages/navbar/Navbar";
import Upload from './pages/upload/Upload';


function App() {
  return (
    <Router>
      
       
        <Navbar />
        <Routes>
          <Route path='/login' element = { <Login />} />
          <Route path="/product" element = { <Products />} />
          <Route path='/order' element = { <Order />} />
          <Route path='/upload' element = { <Upload />} />
        </Routes>
   
    </Router>
  );
}

export default App;
