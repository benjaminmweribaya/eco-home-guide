import React from 'react';

function CompletedButton({ onClick }) {
  return (
    <button onClick={onClick}>
      ✅ Completed
    </button>
  );
}

export default CompletedButton;