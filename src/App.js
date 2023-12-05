// src/App.js

import React from 'react';
import NavBar from './components/NavBar';
import Home from './Home';
import Menu from './Menu';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      {/* Opcionalmente, puedes agregar más rutas y componentes */}
      {/* <Menu /> */}
    </div>
  );
};

export default App;
