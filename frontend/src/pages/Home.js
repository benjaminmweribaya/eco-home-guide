import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';
import { Leaf, Sparkles, Check, LogIn, UserPlus, Globe } from 'lucide-react';
import Lottie from 'lottie-react';
import ecoAnimation from '../assets/eco-animation.json';

const Home = () => {
  const { categories } = useContext(AppContext);

  return (
    <div className="home-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="text-center bg-gradient-to-r from-green-100 via-green-50 to-green-100 rounded-2xl py-10 px-4 mb-16 shadow-inner flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Eco Home Guide 🌿
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
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
        </div>

        {/* ✅ Lottie Animation */}
        <div className="flex-1 max-w-sm">
          <Lottie animationData={ecoAnimation} loop={true} />
        </div>
      </section>

      {/* How it Works */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* 🔽 Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-5 rounded-xl border-2 border-green-300 bg-white shadow hover:shadow-lg transition"
          >
            <Sparkles className="text-green-600 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold mb-2">1. Discover Tips</h3>
            <p className="text-sm text-gray-600">Browse practical advice for making eco-friendly changes in your daily life.</p>
          </motion.div>

          {/* 🔽 Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-5 rounded-xl border-2 border-emerald-300 bg-white shadow hover:shadow-lg transition"
          >
            <Leaf className="text-green-600 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold mb-2">2. Take Action</h3>
            <p className="text-sm text-gray-600">Mark tips as completed and integrate them into your lifestyle.</p>
          </motion.div>

          {/* 🔽 Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-5 rounded-xl border-2 border-lime-300 bg-white shadow hover:shadow-lg transition"
          >
            <Check className="text-green-600 mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold mb-2">3. Track Progress</h3>
            <p className="text-sm text-gray-600">Save favorites and completed tips to track your journey to sustainability.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* 🌿 New Section: Why Go Green */}
      <motion.section
        className="bg-white rounded-xl shadow-md p-10 mb-20 border-l-8 border-green-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
          <Globe size={24} className="text-green-500" />
          Why Go Green?
        </h2>
        <p className="text-gray-700 text-md">
          Going green not only helps the environment but also improves your health and saves money over time.
          Whether it's reducing plastic use or optimizing energy consumption, your actions matter.
        </p>
      </motion.section>

      {/* Categories */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white p-4 rounded-xl border-2 border-green-200 hover:border-green-500 shadow-sm hover:shadow-md transition"
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

      {/* ✅ Dynamic Testimonials & Eco Stats */}
      <motion.section
        className="mb-20 bg-emerald-50 border border-emerald-200 rounded-xl shadow p-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">💬 What People Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
            <p>"Thanks to Eco Home Guide, we reduced our utility bill by 22%! The tips are so simple yet powerful."</p>
            <span className="block text-sm text-gray-500 mt-2">— Amina O., Nairobi</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-lime-500">
            <p>"I never realized how many habits I could change until I started tracking them here."</p>
            <span className="block text-sm text-gray-500 mt-2">— Ben M., Cape Town</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-emerald-500">
            <p>🌍 Over <strong>18,000 kWh</strong> of energy saved by our users so far. That’s equivalent to planting 400+ trees!</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-400">
            <p>♻️ Community members have prevented <strong>2.5 tons</strong> of plastic waste from entering landfills!</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-xl text-center shadow-inner">
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
