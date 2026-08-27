import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="App">
      {!showProductList ? (
        <div className="landing">
          <h1>Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful houseplants.</p>
          <button onClick={() => setShowProductList(true)}>Get Started</button>
        </div>
      ) : (
        <div>
          {/* Simple navigation bar for the inner pages */}
          <nav className="navbar">
            <div className="logo">🌿 Paradise Nursery</div>
            <div>
              <span style={{cursor:'pointer', color:'white', margin:'0 15px', fontWeight:'bold'}} onClick={() => setShowProductList(false)}>Home</span>
              <span style={{cursor:'pointer', color:'white', margin:'0 15px', fontWeight:'bold'}} onClick={() => setShowProductList(true)}>Plants</span>
              <span style={{cursor:'pointer', color:'white', margin:'0 15px', fontWeight:'bold'}}>Cart</span>
            </div>
          </nav>
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
