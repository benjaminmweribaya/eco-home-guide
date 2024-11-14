import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex space-x-6 justify-center bg-white shadow-md py-4 w-full max-w-screen-md" >
      <Link to="/" className="text-green-600 hover:text-green-800 font-semibold">Home</Link>
      <Link to="/tips" className="text-green-600 hover:text-green-800 font-semibold">Tips</Link>
      <Link to="/favorites" className="text-green-600 hover:text-green-800 font-semibold">Favorites</Link>
    </nav>
  );
}

export default NavBar;