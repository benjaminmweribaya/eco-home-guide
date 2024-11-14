import React, { useContext } from 'react';
import TipList from '../components/TipList';
import { AppContext } from '../AppContext';

function Favorites() {
    const { favorites } = useContext(AppContext);

    return (
        <div className="favorites-container text-center py-6 max-w-screen-md mx-auto">
            <h1 className="text-2xl font-bold text-green-700 mb-4">Favorite Tips</h1>
            {favorites.length > 0 ? (
                <TipList tips={favorites} />
            ) : (
                <p className="text-gray-600">No favorite tips yet.</p>
            )}
        </div>
    );
}

export default Favorites;