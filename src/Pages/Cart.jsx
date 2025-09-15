import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // ✅ localStorage se cart load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // ✅ Save cart in localStorage
  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    saveCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            🛒 Your Shopping Cart
          </h2>
          <p className="text-xl text-gray-600">
            Review your items and proceed to checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-white/20 max-w-2xl mx-auto">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h3>
              <p className="text-gray-600 text-lg mb-8">Looks like you haven't added any items to your cart yet.</p>
              <button 
                onClick={() => window.history.back()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* Product Image */}
                    <div className="relative">
                      <img
                        src={item.image || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop"}
                        alt={item.name}
                        className="w-32 h-32 object-cover rounded-2xl shadow-lg"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop";
                        }}
                      />
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {item.quantity}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Rs. {item.price}
                      </p>
                      <p className="text-gray-500">
                        Category: {item.category?.name || "N/A"}
                      </p>
                      <p className="text-lg font-semibold text-gray-700 mt-2">
                        Subtotal: Rs. {Number(item.price) * item.quantity}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQty(item._id)}
                          className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-xl font-bold transition-colors duration-300"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 bg-blue-50 rounded-xl font-bold text-lg min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(item._id)}
                          className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-xl font-bold transition-colors duration-300"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-700">Items ({cart.length})</span>
                    <span className="text-lg font-semibold text-gray-800">{cart.length}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-700">Subtotal</span>
                    <span className="text-lg font-semibold text-gray-800">Rs. {total}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-700">Shipping</span>
                    <span className="text-lg font-semibold text-green-600">Free</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-4">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Rs. {total}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    🛒 Proceed to Checkout
                  </button>
                  
                  <button
                    onClick={clearCart}
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
