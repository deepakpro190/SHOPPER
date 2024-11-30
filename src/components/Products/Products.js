import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Products.css';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const { addToCart } = useCart();

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      category: "wearables",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: 149.99,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: 89.99,
      category: "wearables",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 159.99,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Phone Case",
      price: 24.99,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filterProducts = () => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPriceRange = priceRange === 'all' || 
        (priceRange === 'under100' && product.price < 100) ||
        (priceRange === '100to200' && product.price >= 100 && product.price <= 200) ||
        (priceRange === 'over200' && product.price > 200);

      return matchesSearch && matchesCategory && matchesPriceRange;
    });
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    // Optional: Add a notification or feedback here
  };

  return (
    <div className="products-page">
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="wearables">Wearables</option>
          <option value="accessories">Accessories</option>
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="price-select"
        >
          <option value="all">All Prices</option>
          <option value="under100">Under $100</option>
          <option value="100to200">$100 - $200</option>
          <option value="over200">Over $200</option>
        </select>
      </div>

      <div className="products-grid">
        {filterProducts().map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <div className="product-actions">
              <Link to={`/product/${product.id}`} className="view-button">
                View Details
              </Link>
              <button 
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filterProducts().length === 0 && (
        <div className="no-results">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Products;