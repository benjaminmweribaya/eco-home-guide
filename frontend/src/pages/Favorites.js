import React, { useContext } from 'react';
import TipList from '../components/TipList';
import { AppContext } from '../AppContext';

function Favorites() {
    const { favorites } = useContext(AppContext);

    return (
        <div className="favorites-container">
            <h1>Favorite Tips</h1>
            {favorites.length > 0 ? (
                <TipList tips={favorites} />
            ) : (
                <p>No favorite tips yet.</p>
            )}
        </div>
    );
}

export default Favorites;