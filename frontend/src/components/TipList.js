import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function TipList({ tips }) {
    const { toggleFavorite, toggleCompleted } = useContext(AppContext);

    return (
        <div className="tip-list grid gap-4 p-4">
            {tips.map((tip) => (
                <div
                    key={tip.id}
                    className="tip-item bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-md"
                >
                    <p className="text-lg font-semibold text-gray-800 mb-2">{tip.text}</p>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => toggleFavorite(tip.id)}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                        >
                            {tip.isFavorite ? 'Unfavorite' : 'Favorite'}
                        </button>
                        <button
                            onClick={() => toggleCompleted(tip.id)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                        >
                            {tip.isCompleted ? 'Undo Completed' : 'Mark as Completed'}
                        </button>
                        {tip.isCompleted && <span className="text-green-700 mt-2 block">✅ Completed</span>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TipList;