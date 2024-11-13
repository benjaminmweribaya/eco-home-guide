import React from 'react';
import TipList from '../components/TipList';

function Favorites() {
  const tips = [
    { id: 1, text: "Use energy-efficient light bulbs", isFavorite: true, isCompleted: false },
    { id: 2, text: "Recycle waste properly", isFavorite: false, isCompleted: false },
    { id: 3, text: "Install water-saving fixtures", isFavorite: true, isCompleted: false },
  ];

  const favoriteTips = tips.filter((tip) => tip.isFavorite);

  return (
    <div>
      <h1>Favorite Tips</h1>
      <TipList tips={favoriteTips} />
    </div>
  );
}

export default Favorites;