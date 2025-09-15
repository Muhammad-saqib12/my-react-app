import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
const Backend_API = import.meta.env.VITE_BACKEND_API;

export default function Category() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", image: "", price: "", category: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // ✅ Add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${Backend_API}/product/add`, form);
      setForm({ name: "", image: "", price: "", category: "" });
      setIsModalOpen(false);
      fetchProducts();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Backend_API}/product/delete/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const raja = useParams();
  const filtereddata = products.filter((item) => item.category?.name === raja.title);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {raja.title ? `${raja.title} Products` : 'All Products'}
          </h2>
          <p className="text-xl text-gray-600">
            Discover amazing products in this category
          </p>
        </div>


        {/* Product Grid */}
        {filtereddata.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtereddata.map((prod) => (
              <Link key={prod._id} to={`/category/${prod.category.name}/${prod.name}`}>
                <div className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 relative">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
                    <p className="text-gray-500">
                      Category: {prod.category?.name}
                    </p>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-white/20 max-w-2xl mx-auto">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">No Products Found</h3>
              <p className="text-gray-600 text-lg mb-8">
                {raja.title ? `No products found in ${raja.title} category.` : 'No products available.'}
              </p>
              <p className="text-gray-500">No products available in this category yet.</p>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
