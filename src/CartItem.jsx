import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">🌿 Paradise Nursery</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            <span className="cart-icon">
              🛒
              <span className="cart-badge">{cartItems.length}</span>
            </span>
          </Link>
        </div>
      </nav>

      <div className="cart-page">
        <h2 style={{ color: '#2e7d32' }}>Your Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Start shopping!</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image || 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b'} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                  <p style={{ fontWeight: 'bold' }}>Total: ${item.totalPrice.toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                  <button className="delete-btn" onClick={() => handleRemove(item.id)}>Delete</button>
                </div>
              </div>
            ))}
            
            <div style={{ marginTop: '2rem', borderTop: '2px solid #ddd', paddingTop: '1rem' }}>
              <h3 style={{ color: '#2e7d32' }}>Total Cart Amount: ${totalAmount.toFixed(2)}</h3>
              <button className="checkout-btn" onClick={handleCheckout}>Checkout (Coming Soon)</button>
              <Link to="/plants">
                <button className="continue-btn">Continue Shopping</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
