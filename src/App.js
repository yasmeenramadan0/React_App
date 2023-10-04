import React from 'react';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Profile } from './profile'; 
import { Products } from './products'; 

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
