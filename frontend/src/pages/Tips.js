import React, { useContext, useState } from 'react';
import TipList from '../components/TipList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { AppContext } from '../AppContext';

function Tips() {
  const { tips, addToFavorites, toggleCompleted } = useContext(AppContext); // Access tips and addToFavorites from context
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTips = tips.filter((tip) =>
    tip.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-center py-6 w-full max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold text-green-700 mb-4">Eco Tips</h1>
      <CategoryFilter />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TipList tips={filteredTips} onFavorite={addToFavorites} onToggleCompleted={toggleCompleted} />
    </div>
  );
}

export default Tips;