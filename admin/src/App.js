import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Products from "./pages/products/Products";

function App() {
  return (
    <Router>
      
       
        <Routes>
          <Route path='/' element = { <Products />} />
         
        </Routes>
   
    </Router>
  );
}

export default App;
