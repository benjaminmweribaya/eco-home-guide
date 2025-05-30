import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { motion } from 'framer-motion';
import { Heart, CheckCircle, Search, Filter } from 'lucide-react';

function Tips() {
  const {
    tips,
    addToFavorites,
    toggleCompleted,
    categories,
    selectedCategory,
    selectCategory,
  } = useContext(AppContext);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredTips = tips.filter((tip) => {
    const matchesSearch = tip.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? tip.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <motion.h1
        className="text-4xl font-bold text-emerald-700 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌿 Explore Sustainable Living Tips
      </motion.h1>

      {/* Filters */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* Category Filter */}
        <div>
          <label htmlFor="categoryFilter" className="text-gray-700 font-medium flex items-center mb-1">
            <Filter className="w-4 h-4 mr-1" />
            Filter by Category:
          </label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => selectCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div>
          <label className="text-gray-700 font-medium flex items-center mb-1">
            <Search className="w-4 h-4 mr-1" />
            Search Tips:
          </label>
          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Tips List */}
      <div className="grid gap-6">
        {filteredTips.map((tip) => (
          <motion.div
            key={tip.id}
            className="bg-white border border-emerald-100 rounded-2xl p-5 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg font-medium text-gray-800 mb-3">{tip.text}</p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => addToFavorites(tip.id)}
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition"
              >
                <Heart size={16} />
                {tip.isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
              <button
                onClick={() => toggleCompleted(tip.id)}
                className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition"
              >
                <CheckCircle size={16} />
                {tip.isCompleted ? 'Undo' : 'Mark Completed'}
              </button>
              {tip.isCompleted && (
                <span className="text-emerald-600 text-sm ml-2 flex items-center">
                  <CheckCircle size={16} className="mr-1" />
                  Completed
                </span>
              )}
            </div>
          </motion.div>
        ))}

        {filteredTips.length === 0 && (
          <motion.div
            className="text-center text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Heart className="mx-auto mb-4 text-emerald-400" size={40} />
            <p className="text-lg">No tips match your search or filter.</p>
            <p className="text-sm">Try adjusting your filters or search keywords.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Tips;



