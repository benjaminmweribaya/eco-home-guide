import React from 'react';
import FavoriteButton from './FavoriteButton';
import CompletedButton from './CompletedButton';

function TipItem({ tip, onFavorite, onComplete }) {
  return (
    <div className="tip-item">
      <h3>{tip.title}</h3>
      <p>{tip.description}</p>
      <FavoriteButton onClick={() => onFavorite(tip.id)} />
      <CompletedButton onClick={() => onComplete(tip.id)} />
    </div>
  );
}

export default TipItem;