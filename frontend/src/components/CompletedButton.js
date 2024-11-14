import React from 'react';

function CompletedButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mx-2"
    >
      ✅ Completed
    </button>
  );
}

export default CompletedButton;