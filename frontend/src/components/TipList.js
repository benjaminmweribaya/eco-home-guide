import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function TipList({ tips }) {
    const { toggleFavorite } = useContext(AppContext);

    return (
        <div className="tip-list">
            {tips.map((tip) => (
                <div key={tip.id} className="tip-item">
                    <p>{tip.text}</p>
                    <button onClick={() => toggleFavorite(tip.id)}>
                        {tip.isFavorite ? 'Unfavorite' : 'Favorite'}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TipList;