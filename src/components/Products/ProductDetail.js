import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Mock product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      category: "electronics",
      description: "High-quality wireless headphones with noise cancellation technology, providing crystal clear sound and maximum comfort for extended use. Features include Bluetooth 5.0, 30-hour battery life, and premium materials.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "Bluetooth 5.0 connectivity",
        "Premium comfort materials",
        "Built-in microphone",
        "Touch controls"
      ],
      specs: {
        brand: "TechBrand",
        model: "PH-2000",
        color: "Midnight Black",
        warranty: "1 Year",
        inStock: true
      }
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      category: "wearables",
      description: "Advanced smartwatch with comprehensive health monitoring features. Track your fitness goals and stay connected with notifications, calls, and messages.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Heart rate monitoring",
        "Sleep tracking",
        "GPS tracking",
        "Water resistant",
        "Fitness tracking",
        "Smartphone notifications"
      ],
      specs: {
        brand: "TechBrand",
        model: "SW-1000",
        color: "Space Gray",
        warranty: "2 Years",
        inStock: true
      }
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: 149.99,
      category: "electronics",
      description: "Portable wireless speaker with immersive 360-degree sound. Perfect for both indoor and outdoor use with its waterproof design and long battery life.",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "360° sound",
        "Waterproof design",
        "20-hour battery life",
        "Bluetooth 5.0",
        "Built-in microphone",
        "Party mode pairing"
      ],
      specs: {
        brand: "TechBrand",
        model: "WS-3000",
        color: "Black",
        warranty: "1 Year",
        inStock: true
      }
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: 89.99,
      category: "wearables",
      description: "Slim and stylish fitness tracker that helps you monitor your daily activities and health metrics. Perfect for maintaining an active lifestyle.",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Step counting",
        "Heart rate monitoring",
        "Sleep tracking",
        "Water resistant",
        "Smartphone notifications",
        "7-day battery life"
      ],
      specs: {
        brand: "TechBrand",
        model: "FT-100",
        color: "Black",
        warranty: "1 Year",
        inStock: true
      }
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 159.99,
      category: "accessories",
      description: "True wireless earbuds with premium sound quality and active noise cancellation. Perfect for music lovers and professionals on the go.",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Active noise cancellation",
        "Touch controls",
        "30-hour battery life",
        "Water resistant",
        "Wireless charging",
        "Voice assistant support"
      ],
      specs: {
        brand: "TechBrand",
        model: "WE-500",
        color: "White",
        warranty: "1 Year",
        inStock: true
      }
    },
    {
      id: 6,
      name: "Phone Case",
      price: 24.99,
      category: "accessories",
      description: "Durable and stylish phone case providing maximum protection for your device. Features military-grade drop protection and slim design.",
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      features: [
        "Military-grade protection",
        "Wireless charging compatible",
        "Slim design",
        "Anti-scratch coating",
        "Raised edges",
        "Precise cutouts"
      ],
      specs: {
        brand: "TechBrand",
        model: "PC-X",
        color: "Clear",
        warranty: "Lifetime",
        inStock: true
      }
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/products" className="back-button">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          
          <button 
            className="add-to-cart"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart
          </button>

          <div className="product-features">
            <h2>Key Features</h2>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-specs">
            <h2>Specifications</h2>
            <table>
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key.charAt(0).toUpperCase() + key.slice(1)}:</td>
                    <td>{value.toString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;