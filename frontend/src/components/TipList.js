import React from 'react';
import TipItem from './TipItem';

function TipList({ tips, onFavorite, onComplete }) {
  return (
    <div className="tip-list">
      {tips.map((tip) => (
        <TipItem key={tip.id} tip={tip} onFavorite={onFavorite} onComplete={onComplete} />
      ))}
    </div>
  );
}

export default TipList;