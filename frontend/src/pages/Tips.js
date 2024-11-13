import React, { useState } from 'react';
import TipList from '../components/TipList';
import SearchBar from '../components/SearchBar';

function Tips() {
  const [searchTerm, setSearchTerm] = useState('');

  const tips = [
    { id: 1, text: "Use energy-efficient light bulbs", isFavorite: false, isCompleted: false },
    { id: 2, text: "Recycle waste properly", isFavorite: false, isCompleted: false },
    { id: 3, text: "Install water-saving fixtures", isFavorite: false, isCompleted: false },
  ];

  const filteredTips = tips.filter((tip) =>
    tip.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Eco Tips</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TipList tips={filteredTips} />
    </div>
  );
}

export default Tips;