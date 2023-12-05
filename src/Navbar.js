// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/electronics">Electronics</Link>
      <Link to="/category/books">Books</Link>
      {/* Agregar más categorías según sea necesario */}
    </nav>
  );
};

export default NavBar;
