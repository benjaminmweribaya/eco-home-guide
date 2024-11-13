import React, { useContext } from 'react';
import TipList from '../components/TipList';
import { AppContext } from '../AppContext';

function Favorites() {
    const { favorites, removeFromFavorites } = useContext(AppContext);

    return (
        <div className="favorites-container">
            <h1>Favorite Tips</h1>
            <TipList tips={favorites} onFavorite={removeFromFavorites} />
        </div>
    );
}

export default Favorites;