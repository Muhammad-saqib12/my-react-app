import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import AdminDashboard from './Pages/AdminDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes - Everyone can access */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/category/:title" element={<Category />} />
          <Route path="/category/:product/:name" element={<Product />} />
          <Route path="/cart" element={<Cart />} />

          {/* Admin Only Routes - Only admin can access */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App