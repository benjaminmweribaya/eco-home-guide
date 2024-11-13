import React, { useContext, useState } from 'react';
import TipList from '../components/TipList';
import SearchBar from '../components/SearchBar';
import { AppContext } from '../AppContext';

function Tips() {
  const { tips, addToFavorites } = useContext(AppContext); // Access tips and addToFavorites from context
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTips = tips.filter((tip) =>
    tip.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Eco Tips</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TipList tips={filteredTips} onFavorite={addToFavorites} />
    </div>
  );
}

export default Tips;