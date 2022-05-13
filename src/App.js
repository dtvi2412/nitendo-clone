import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import News from './Pages/News';
import Product from './Pages/Product';
import StoreGames from './Pages/StoreGames';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/news/:title" element={<News />} />
          <Route path="/store/games" element={<StoreGames />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
