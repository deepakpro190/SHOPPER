import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">MarketHub</Link>
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/products" onClick={toggleMenu}>Products</Link>
        <Link to="/cart" onClick={toggleMenu} className="cart-link">
          Cart
          <span className="cart-badge">{getCartItemsCount()}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;