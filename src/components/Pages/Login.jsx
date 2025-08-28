import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Check the user's role from the backend response
      if (data.user && data.user.role === "admin") {
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("isAdminLoggedIn", "true");
        alert("Admin Login Successful!");
        navigate("/admin-dashboard");
      } else {
        alert("Invalid email or password or you are not an admin.");
      }
    } catch (error) {
      alert(error.response?.data?.msg || "Invalid email or password.");
      console.error("Login Error:", error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:6000/api/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: "admin", // Explicitly set the role to 'admin'
        }
      );
      alert(data.msg);
      setIsLogin(true); // Switch back to login page after successful signup
    } catch (error) {
      alert(error.response?.data?.msg || "Error creating admin account.");
      console.error("Admin Signup Error:", error);
    }
  };

  return (
    <div className="bg-purple-50 min-h-screen pt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-2xl"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-900">
            {isLogin ? "Admin Log In" : "Admin Sign Up"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin
              ? "Enter your admin credentials to continue"
              : "Create a new admin account"}
          </p>
        </div>
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              onSubmit={handleLoginSubmit}
              className="mt-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="pb-4">
                  <label htmlFor="email-address-login" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address-login"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="pb-4">
                  <label htmlFor="password-login" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password-login"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Log In
              </motion.button>
            </motion.form>
          ) : (
            <motion.form
              key="signup"
              onSubmit={handleSignupSubmit}
              className="mt-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="pb-4">
                  <label htmlFor="name-signup" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="name-signup"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="pb-4">
                  <label htmlFor="email-address-signup" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address-signup"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="pb-4">
                  <label htmlFor="password-signup" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password-signup"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign Up
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
        <div className="mt-6">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-center w-full text-sm font-medium text-purple-600 hover:text-purple-500"
          >
            {isLogin
              ? "Don't have an admin account? Sign Up"
              : "Already have an admin account? Log In"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
