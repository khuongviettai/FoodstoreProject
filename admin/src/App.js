import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Order from "./pages/order/Order";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Navbar from "./pages/navbar/Navbar";
import Upload from './pages/upload/Upload';
import Edit from "./pages/edit/Edit";
import Blog from "./pages/blog/Blog";


function App() {
  return (
    <Router>
      
       
        <Navbar />
        <Routes>
          <Route path='/login' element = { <Login />} />
          <Route path="/product" element = { <Products />} />
          <Route path='/order' element = { <Order />} />
          <Route path='/upload' element = { <Upload />} />
          <Route path='/edit/:id' element = { <Edit />} />
          <Route path='/blog' element = { <Blog />} />
        </Routes>
   
    </Router>
  );
}

export default App;
