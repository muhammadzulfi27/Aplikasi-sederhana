import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile favorites={favorites} movies={[]} />} />
      </Routes>
    </Router>
  );
};

export default App;
