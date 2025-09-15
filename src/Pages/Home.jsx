import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Slider2 from "../Components/Slider2";
import Category from "../Components/Category";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [hovered, setHovered] = useState(null); 
   const categories = [
    {
      title: "Electronics",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      items: ["Smartphones", "Laptops", "Headphones", "Cameras", "Speakers", "Accessories"]
    },
    {
      title: "watch",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      items: ["Rolex", "Casio", "Apple Watch", "Timex", "Fossil", "Luxury Watches"]
    },
    {
      title: "Accessories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbqNdNAja5X4hw6tl8o2kUnY_kjGZuUHjDw&s",
      items: ["Sunglasses", "Wallets", "Belts", "Bags", "Hats", "Scarves"]
    },
    {
      title: "shoes",
      img: "https://onedegree.com.pk/cdn/shop/files/39_6fb6be73-ff30-4df7-868e-00bb9b0d7771.jpg?v=1706092698&width=1206",
      items: ["Nike Air", "Adidas UltraBoost", "Puma Running", "Formal Shoes", "Sandals", "Boots"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 py-20 overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-white/10 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-6 inline-block">
              🎉 Welcome to Usama Store
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Shop the
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Best</span>
              <br />
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover amazing products across all categories. From electronics to fashion, we have everything you need!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/category/Electronics"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🛍️ Start Shopping
              </Link>
              <Link 
                to="/cart"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🛒 View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Categories Navigation */}
      <div className="relative w-full bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200/50">
        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 py-6 font-semibold text-lg tracking-wide">
          {categories.map((cat) => (
            <Link 
              key={cat.title}
              to={`/category/${cat.title}`}
              onMouseEnter={() => setHovered(cat.title)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
            >
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                {cat.title}
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Mega Dropdown */}
        {hovered && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[90vw] max-w-6xl bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-3xl shadow-2xl p-8 z-20 animate-fadeIn">
            {categories
              .filter((cat) => cat.title === hovered)
              .map((cat) => (
                <div key={cat.title} className="flex w-full flex-col lg:flex-row gap-8">
                  {/* Left Image */}
                  <div className="lg:w-2/5 w-full overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="lg:w-3/5 w-full flex flex-col justify-center">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {cat.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Discover the finest collection in our{" "}
                      <span className="font-semibold text-blue-600">{cat.title}</span> category. 
                      Premium quality products at unbeatable prices.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {cat.items.map((item) => (
                        <div
                          key={item}
                          className="p-3 rounded-xl bg-gray-50 hover:bg-blue-50 cursor-pointer transition-all duration-300 group border border-transparent hover:border-blue-200"
                        >
                          <p className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium text-center">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Link 
                        to={`/category/${cat.title}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Shop {cat.title}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="space-y-0">
        <Slider/>
        <Slider2/>
        <Category/>
        
        {/* Featured Products Section */}
        <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-200 to-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-20 animate-pulse delay-3000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Featured Products
                </span>
              </div>
              <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Shop by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Click on any category below to explore amazing products and find exactly what you're looking for!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Electronics Category */}
              <Link to="/category/Electronics" className="group">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      📱 Electronics
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
                      alt="Electronics"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <span className="text-2xl">📱</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 capitalize group-hover:text-blue-600 transition-colors duration-300 mb-2">
                      Electronics
                    </h3>
                    <p className="text-gray-600 mb-4">Smartphones, Laptops, Headphones & More</p>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Click to explore</span>
                      <div className="flex items-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        <span className="text-sm font-semibold">Shop Now</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-300"></div>
                </div>
              </Link>

              {/* Watch Category */}
              <Link to="/category/watch" className="group">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⌚ Watches
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
                      alt="Watches"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <span className="text-2xl">⌚</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 capitalize group-hover:text-green-600 transition-colors duration-300 mb-2">
                      Watches
                    </h3>
                    <p className="text-gray-600 mb-4">Luxury, Smart & Sports Watches</p>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Click to explore</span>
                      <div className="flex items-center space-x-2 text-green-600 group-hover:text-green-700 transition-colors duration-300">
                        <span className="text-sm font-semibold">Shop Now</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-300 transition-colors duration-300"></div>
                </div>
              </Link>

              {/* Shoes Category */}
              <Link to="/category/shoes" className="group">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      👟 Shoes
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
                      alt="Shoes"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <span className="text-2xl">👟</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 capitalize group-hover:text-orange-600 transition-colors duration-300 mb-2">
                      Shoes
                    </h3>
                    <p className="text-gray-600 mb-4">Sneakers, Formal & Sports Shoes</p>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Click to explore</span>
                      <div className="flex items-center space-x-2 text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                        <span className="text-sm font-semibold">Shop Now</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-300 transition-colors duration-300"></div>
                </div>
              </Link>

              {/* Accessories Category */}
              <Link to="/category/Accessories" className="group">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🎧 Accessories
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative overflow-hidden h-72">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
                      alt="Accessories"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Arrow */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <span className="text-2xl">🎧</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 capitalize group-hover:text-purple-600 transition-colors duration-300 mb-2">
                      Accessories
                    </h3>
                    <p className="text-gray-600 mb-4">Headphones, Bags, Sunglasses & More</p>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Click to explore</span>
                      <div className="flex items-center space-x-2 text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                        <span className="text-sm font-semibold">Shop Now</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-300 transition-colors duration-300"></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                🌟 Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide the best shopping experience with premium quality and service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Quality</h3>
                <p className="text-gray-600">Only the finest products from trusted brands worldwide</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Fast Delivery</h3>
                <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer service for your peace of mind</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Best Prices</h3>
                <p className="text-gray-600">Competitive pricing with regular discounts and offers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Interactive Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 relative overflow-hidden">
          {/* Background Animations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full opacity-30 animate-bounce delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-green-300 to-blue-300 rounded-full opacity-30 animate-bounce delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-18 h-18 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-30 animate-bounce delay-3000"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-12">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-6 inline-block">
                🎉 Special Offers
              </span>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                Amazing Deals Await You!
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't miss out on our exclusive offers and limited-time deals. Shop now and save big!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Flash Sale</h3>
                <p className="text-gray-600 mb-6">Up to 70% off on selected items. Limited time only!</p>
                <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Shop Now
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Shipping</h3>
                <p className="text-gray-600 mb-6">Free delivery on orders above Rs. 5,000. No hidden charges!</p>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Learn More
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">VIP Membership</h3>
                <p className="text-gray-600 mb-6">Join our VIP program and get exclusive access to premium products!</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Join VIP
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg mb-6 inline-block">
                📧 Stay Connected
              </span>
              <h2 className="text-5xl font-bold text-white mb-6">
                Never Miss a Deal!
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about exclusive offers, new arrivals, and special promotions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-white/30 transition-all duration-300 text-lg placeholder-gray-400"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  );
}
