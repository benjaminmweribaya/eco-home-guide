import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tips">Tips</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default NavBar;