import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { Heart, CheckCircle, Filter } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function Favorites() {
    const { favorites, addToFavorites, toggleCompleted } = useContext(AppContext);
    const [sortCompletedLast, setSortCompletedLast] = useState(true);

    const sortedFavorites = [...favorites].sort((a, b) => {
        if (!sortCompletedLast) return 0;
        return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <motion.h1
                className="text-4xl font-bold text-emerald-700 text-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                💚 Your Favorite Eco Tips
            </motion.h1>

            {/* 🔹 Sort Toggle UI */}
            <div className="flex justify-end items-center mb-6">
                <button
                    onClick={() => setSortCompletedLast(!sortCompletedLast)}
                    className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-800 font-medium transition"
                >
                    <Filter size={16} />
                    {sortCompletedLast ? 'Show Original Order' : 'Sort Completed Last'}
                </button>
            </div>

            {sortedFavorites.length > 0 ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <AnimatePresence>
                        {sortedFavorites.map((tip) => (
                            <motion.div
                                key={tip.id}
                                layout
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border border-emerald-100 rounded-2xl p-5 shadow hover:shadow-lg transition"
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
                    </AnimatePresence>
                </div>
            ) : (
                <motion.div
                    className="text-center text-gray-600 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <Heart className="mx-auto mb-4 text-emerald-400" size={48} />
                    <p className="text-xl font-semibold">No favorites yet</p>
                    <p className="text-sm mt-1">Tap the heart icon on tips you like to save them here.</p>
                </motion.div>
            )}
        </div>
    );
}

export default Favorites;


