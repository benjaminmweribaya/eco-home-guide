import React from 'react';
import FavoriteButton from './FavoriteButton';
import CompletedButton from './CompletedButton';

function TipItem({ tip, onFavorite, onComplete }) {
  return (
    <div className="tip-item bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200 mb-4">
      <h3 className="text-xl font-semibold text-gray-700">{tip.title}</h3>
      <p className="text-gray-600 mb-4">{tip.description}</p>
      <div className="flex space-x-4">
        <FavoriteButton onClick={() => onFavorite(tip.id)} />
        <CompletedButton onClick={() => onComplete(tip.id)} />
      </div>
    </div>
  );
}

export default TipItem;