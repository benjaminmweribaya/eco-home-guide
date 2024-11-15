import React from 'react';
import FavoriteButton from './FavoriteButton';
import CompletedButton from './CompletedButton';

function TipItem({ tip, onFavorite, onComplete }) {
  return (
    <div className="tip-item bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200 w-full mb-4">
      <h3 className="text-xl font-semibold text-gray-700">{tip.title}</h3>
      <p className="text-gray-600 mb-4">{tip.description}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => onFavorite(tip.id)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Favorite
        </button>
        <button
          onClick={() => onComplete(tip.id)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Mark as Completed
        </button>
      </div>
    </div>
  );
}

export default TipItem;