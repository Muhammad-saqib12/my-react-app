import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
const Backend_API = import.meta.env.VITE_BACKEND_API;

export default function Product() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // ✅ Cart state localStorage ke sath sync
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const saveCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Add to Cart
  const addToCart = (product) => {
    const itemExists = cart.find((item) => item._id === product._id);
    let updatedCart;
    if (itemExists) {
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    saveCart(updatedCart);
  };

  // ✅ Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${Backend_API}/product`);
      setProducts(res.data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // ✅ Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${Backend_API}/category`);
      setCategories(res.data.categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const raja = useParams();
  const filtereddata = products.filter(
    (item) => item.category?.name === raja.product
  );
  const filtersingledata = filtereddata.filter(
    (item) => item.name === raja.name
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Product Details
          </h2>
          <p className="text-xl text-gray-600">
            Discover amazing products and add them to your cart
          </p>
        </div>

        {/* Go to Cart Button */}
        <div className="flex justify-end mb-8">
          <Link to="/cart" className="relative group">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="font-semibold text-gray-800">Go to Cart</span>
                {cart.length > 0 && (
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {cart.length}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </div>

        {/* Product Grid */}
        {filtersingledata.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtersingledata.map((prod) => (
              <div
                key={prod._id}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={prod.image || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"}
                    alt={prod.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {prod.name}
                  </h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    Rs. {prod.price}
                  </p>
                  <p className="text-gray-500 mb-4">
                    Category: {prod.category?.name}
                  </p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(prod)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-white/20 max-w-2xl mx-auto">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h3>
              <p className="text-gray-600 text-lg mb-8">The product you're looking for doesn't exist or has been removed.</p>
              <Link to="/">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
