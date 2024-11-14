import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <nav className="flex space-x-10 justify-center bg-green-600 shadow-md py-4 w-full max-w-screen-md rounded-lg mx-auto " >
        <Link to="/" className="text-white hover:text-blue-600 font-bold">Home</Link>
        <Link to="/tips" className="text-white hover:text-blue-600 font-bold">Tips</Link>
        <Link to="/favorites" className="text-white hover:text-blue-600 font-bold">Favorites</Link>
      </nav>
  );
}

export default NavBar;