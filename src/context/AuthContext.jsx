import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

  // Fixed admin credentials
  const ADMIN_EMAIL = "admin@usama.com";
  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('user');
    const savedUsers = localStorage.getItem('allUsers');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    
    if (savedUsers) {
      setAllUsers(JSON.parse(savedUsers));
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check admin credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser = {
        id: 1,
        email: ADMIN_EMAIL,
        name: "Admin Usama",
        role: "admin",
        loginTime: new Date().toISOString()
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      setLoading(false);
      return { success: true, user: adminUser };
    }
    
    // Check if user exists in allUsers
    const existingUser = allUsers.find(u => u.email === email);
    if (existingUser) {
      const updatedUser = {
        ...existingUser,
        loginTime: new Date().toISOString()
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setLoading(false);
      return { success: true, user: updatedUser };
    }
    
    setLoading(false);
    return { success: false, error: "User not found. Please signup first." };
  };

  const signup = async (name, email, password) => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const existingUser = allUsers.find(u => u.email === email);
    if (existingUser) {
      setLoading(false);
      return { success: false, error: "User already exists. Please login instead." };
    }
    
    const newUser = {
      id: Date.now(),
      email: email,
      name: name,
      role: "user",
      signupTime: new Date().toISOString(),
      loginTime: new Date().toISOString()
    };
    
    // Add to allUsers
    const updatedUsers = [...allUsers, newUser];
    setAllUsers(updatedUsers);
    localStorage.setItem('allUsers', JSON.stringify(updatedUsers));
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setLoading(false);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAdmin = () => {
    return user && user.role === 'admin';
  };

  const isUser = () => {
    return user && user.role === 'user';
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAdmin,
    isUser,
    loading,
    allUsers
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
