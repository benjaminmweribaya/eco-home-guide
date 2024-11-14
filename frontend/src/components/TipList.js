import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

function TipList({ tips }) {
    const { toggleFavorite, toggleCompleted } = useContext(AppContext);

    return (
        <div className="tip-list">
            {tips.map((tip) => (
                <div key={tip.id} className="tip-item">
                    <p>{tip.text}</p>
                    <button onClick={() => toggleFavorite(tip.id)}>
                        {tip.isFavorite ? 'Unfavorite' : 'Favorite'}
                    </button>
                    <button onClick={() => toggleCompleted(tip.id)}>
                        {tip.isCompleted ? 'Undo Completed' : 'Mark as Completed'}
                    </button>
                    {tip.isCompleted && <span>✅ Completed</span>}
                </div>
            ))}
        </div>
    );
}

export default TipList;