import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    getCartTotal 
  } = useCart();

  const calculateTax = () => {
    return getCartTotal() * 0.1; // 10% tax
  };

  const calculateTotal = () => {
    return getCartTotal() + calculateTax();
  };

  return (
    <div className="container mx-auto p-8">
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl text-primary mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="inline-block px-8 py-4 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-primary mb-8">Shopping Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-8">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-[auto,1fr,auto,auto,auto] items-center gap-6 p-6 border-b border-gray-200 last:border-none">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to={`/product/${item.id}`}
                      className="text-lg text-primary font-medium hover:underline"
                    >
                      {item.name}
                    </Link>
                    <div className="text-secondary font-bold">${item.price}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="min-w-[40px] text-center font-medium">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-lg hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-bold text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-secondary text-white rounded hover:bg-secondary/90 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;