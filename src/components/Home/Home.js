import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-black bg-opacity-60 bg-blend-overlay flex items-center justify-center text-center text-white p-8" style={{backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}>
        <div className="max-w-3xl">
          <h1 className="text-5xl mb-4">Welcome to MarketHub</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
          <Link to="/products" className="inline-block px-8 py-4 bg-blue-500 text-white no-underline rounded hover:-translate-y-0.5 transition-transform">Shop Now</Link>
        </div>
      </section>

      <section className="py-16 px-8">
        <h2 className="text-3xl text-center mb-12 text-blue-500">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl text-blue-500 mb-2">{product.name}</h3>
              <p className="text-xl font-bold text-blue-500 mb-4">${product.price}</p>
              <Link to={`/product/${product.id}`} className="mt-auto w-full py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-500/90 transition-colors text-center">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 bg-gray-50">
        <h2 className="text-3xl text-center mb-12 text-blue-500">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="h-48 bg-cover bg-center rounded-md mb-4" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')"}}></div>
            <h3 className="text-xl text-blue-500 mb-4">Electronics</h3>
            <Link to="/products" className="block w-full py-3 px-4 bg-blue-500 text-white rounded text-center hover:bg-blue-500/90 transition-colors">Browse Electronics</Link>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="h-48 bg-cover bg-center rounded-md mb-4" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')"}}></div>
            <h3 className="text-xl text-blue-500 mb-4">Accessories</h3>
            <Link to="/products" className="block w-full py-3 px-4 bg-blue-500 text-white rounded text-center hover:bg-blue-500/90 transition-colors">Browse Accessories</Link>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="h-48 bg-cover bg-center rounded-md mb-4" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')"}}></div>
            <h3 className="text-xl text-blue-500 mb-4">Wearables</h3>
            <Link to="/products" className="block w-full py-3 px-4 bg-blue-500 text-white rounded text-center hover:bg-blue-500/90 transition-colors">Browse Wearables</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;