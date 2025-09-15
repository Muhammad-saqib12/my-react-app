import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Backend_API = import.meta.env.VITE_BACKEND_API;

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", image: "" });

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${Backend_API}/category`);
      setCategories(res.data.categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${Backend_API}/category`, form);
      setForm({ name: "", image: "" });
      fetchCategories();
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Backend_API}/category/${id}`);
      fetchCategories();
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-200 to-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🛍️ Explore Categories
            </span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover amazing products across our carefully curated categories. Each category is handpicked to bring you the best shopping experience.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link key={cat._id} to={`/category/${cat.name}`} className="group">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    #{index + 1}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden h-72">
                  <img
                    src={cat.image || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop";
                    }}
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
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 capitalize group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 mb-4">Explore amazing products in this category</p>
                  
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
          ))}
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Categories Yet</h3>
              <p className="text-gray-600 text-lg">Add your first category to get started!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
