import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';
import { Leaf, Sparkles, Check, LogIn, UserPlus } from 'lucide-react';

const Home = () => {
  const { categories } = useContext(AppContext);

  return (
    <div className="home-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="text-center bg-green-100 mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Eco Home Guide 🌿
        </motion.h1>
        <p className="text-gray-600 text-lg max-w-7xl mx-auto mb-6">
          Discover sustainable tips to make your home greener and your lifestyle more eco-friendly.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
              <UserPlus size={18} /> Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="flex items-center gap-2 px-6 py-2 border border-green-600 text-green-600 rounded-xl hover:bg-green-100 transition">
              <LogIn size={18} /> Log In
            </button>
          </Link>
        </div>
      </section>

      {/* How it Works */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 rounded-xl shadow hover:shadow-lg transition">
            <Sparkles className="text-green-600 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-medium mb-2">1. Discover Tips</h3>
            <p className="text-sm text-gray-600">Browse practical advice for making eco-friendly changes in your daily life.</p>
          </div>
          <div className="p-4 rounded-xl shadow hover:shadow-lg transition">
            <Leaf className="text-green-600 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-medium mb-2">2. Take Action</h3>
            <p className="text-sm text-gray-600">Mark tips as completed and integrate them into your lifestyle.</p>
          </div>
          <div className="p-4 rounded-xl shadow hover:shadow-lg transition">
            <Check className="text-green-600 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-medium mb-2">3. Track Progress</h3>
            <p className="text-sm text-gray-600">Save favorites and completed tips to track your journey to sustainability.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-lg font-bold text-green-700 mb-1">
                {index + 1}. {category.name}
              </h4>
              <p className="text-sm text-gray-600">Explore tips about {category.name.toLowerCase()}.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-green-100 p-8 rounded-xl text-center shadow-inner">
        <h3 className="text-2xl font-semibold text-green-800 mb-3">Start Your Eco Journey Today</h3>
        <p className="text-gray-700 mb-6">Join a community committed to living sustainably and creating a greener future.</p>
        <Link to="/signup">
          <button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            Join Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
