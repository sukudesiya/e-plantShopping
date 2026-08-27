import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const products = [
    // Category 1: Flowering Plants
    { id: 1, name: 'Orchid', price: 25, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1522774353139-87333fd75b6a' },
    { id: 2, name: 'Rose', price: 15, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110' },
    { id: 3, name: 'Lily', price: 20, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1595005662932-8544a7de47a3' },
    { id: 4, name: 'Hibiscus', price: 18, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1603569248414-87fd58c5427b' },
    { id: 5, name: 'Jasmine', price: 22, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1596525131425-30840cbeb32d' },
    { id: 6, name: 'Bougainvillea', price: 30, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1596443686812-2f45229eeb27' },

    // Category 2: Succulents
    { id: 7, name: 'Aloe Vera', price: 12, category: 'Succulents', image: 'https://images.unsplash.com/photo-1501959245479-f9c5350d78c5' },
    { id: 8, name: 'Snake Plant', price: 14, category: 'Succulents', image: 'https://images.unsplash.com/photo-1593691509543-c55fb4a4c388' },
    { id: 9, name: 'Jade Plant', price: 16, category: 'Succulents', image: 'https://images.unsplash.com/photo-1599335752561-1db3c529b30b' },
    { id: 10, name: 'Echeveria', price: 10, category: 'Succulents', image: 'https://images.unsplash.com/photo-1509423355977-26a1e12d16fa' },
    { id: 11, name: 'Haworthia', price: 13, category: 'Succulents', image: 'https://images.unsplash.com/photo-1586049861405-ec692a3382e5' },
    { id: 12, name: 'Agave', price: 20, category: 'Succulents', image: 'https://images.unsplash.com/photo-1507926439897-2038f9cd03e5' },

    // Category 3: Foliage Plants
    { id: 13, name: 'Monstera', price: 35, category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b' },
    { id: 14, name: 'Pothos', price: 18, category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1593691509543-c55fb4a4c388' },
    { id: 15, name: 'Fern', price: 12, category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1620133950928-c86e2d2bd434' },
    { id: 16, name: 'Peace Lily', price: 22, category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1595250529111-99e1668c46a8' },
    { id: 17, name: 'Ficus', price: 28, category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8' },
    { id: 18, name: 'Calathea', price: 25, category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1611996367308-97af4a4299e7' },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Group products by category
  const categories = ['Flowering Plants', 'Succulents', 'Foliage Plants'];

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

      <div className="product-list">
        {categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="product-grid">
              {products.filter(p => p.category === category).map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
