import React from 'react';

function FavoriteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mx-2"
    >
      ❤️ Favorite
    </button>
  );
}

export default FavoriteButton;