import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Slider22() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", image: "" });

  // ✅ Fetch categories from backend
  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:3500/category");
      setCategories(res.data.categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ Add new category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3500/category", form);
      setForm({ name: "", image: "" }); // reset form
      fetchCategories(); // refresh categories list
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  // ✅ Delete category
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/category/${id}`);
      fetchCategories(); // refresh after delete
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>

      {/* ✅ Add Category Form */}
     

      {/* ✅ Show Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link key={cat._id} to={`/category/${cat.name}`}> 
          <div
            key={cat._id}
            className="bg-white shadow-md rounded-full overflow-hidden hover:shadow-lg transition relative"
          >
            {/* <Link to={`/category/${cat._id}`}> */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold capitalize">{cat.name}</h3>
              </div>
            

            {/* ✅ Delete Button */}
            {/* <button
              onClick={() => handleDelete(cat._id)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm rounded"
            >
              Delete
            </button> */}
          </div></Link>
        ))}
      </div>
    </section>
  );
}
