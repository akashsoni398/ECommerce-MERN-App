import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

