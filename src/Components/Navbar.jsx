import { Search, ShoppingCart, LogOut, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout, isAdmin } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // For now, just log the search query
      console.log('Searching for:', searchQuery);
      // You can implement actual search functionality here
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container */}
        <div className="flex justify-between h-20 items-center">

          {/* Center: Brand Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Usama Store
              </h1>
            </Link>
          </div>

          {/* Right: Search + Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 px-4 py-3 pl-12 pr-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 bg-gray-50/50"
              />
              <button type="submit" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative group">
                <div className="p-2 rounded-xl bg-gray-100 group-hover:bg-blue-100 transition-colors duration-300">
                  <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-xs text-white px-2 py-1 rounded-full font-semibold shadow-lg">
                  0
                </span>
              </Link>
              
              {/* Login Icon or User Menu */}
              {user ? (
                <div className="flex items-center space-x-3">
                  {/* Admin Dashboard Link - Only for Admin */}
                  {isAdmin() && (
                    <Link
                      to="/admin/dashboard"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  
                  {/* User Info & Logout */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-xl">
                      <User className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{user.name}</span>
                    </div>
                    <button
                      onClick={logout}
                      className="flex items-center space-x-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors duration-300"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-2 rounded-xl bg-gray-100 hover:bg-blue-100 transition-colors duration-300 group"
                >
                  <User className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 px-6 py-6 space-y-6 animate-slideIn">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 bg-gray-50/50"
            />
            <button type="submit" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
          </form>

          {/* User Info or Login Button */}
          {user ? (
            <div className="bg-white/50 rounded-2xl p-4 mb-4">
              <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
              <p className="text-xs text-gray-600">{user?.email}</p>
              {isAdmin() && (
                <Link to="/admin/dashboard" className="block text-sm text-blue-600 hover:text-blue-700 font-medium mt-2">
                  Admin Dashboard
                </Link>
              )}
            </div>
          ) : (
            <div className="bg-white/50 rounded-2xl p-4 mb-4">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300"
              >
                Login
              </Link>
            </div>
          )}

          {/* Icons Row */}
          <div className="flex justify-around">
            <Link to="/cart" className="flex flex-col items-center space-y-2 relative">
              <div className="p-3 rounded-xl bg-gray-100 group-hover:bg-blue-100 transition-colors duration-300">
                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <span className="text-xs text-gray-600">Cart</span>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-xs text-white px-2 py-1 rounded-full font-semibold shadow-lg">
                0
              </span>
            </Link>
            {user && (
              <div className="flex flex-col items-center space-y-2">
                <button
                  onClick={logout}
                  className="p-3 rounded-xl bg-red-100 hover:bg-red-200 transition-colors duration-300"
                >
                  <LogOut className="w-6 h-6 text-red-600" />
                </button>
                <span className="text-xs text-gray-600">Logout</span>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
