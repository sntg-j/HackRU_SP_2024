import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PathFindingPage from './pages/PathFindingPage'; // Ensure this import is correct
import RecipeReaderPage from './pages/RecipeReaderPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PathFindingPage" element={<PathFindingPage />} />
        <Route path="/RecipeReaderPage" element={<RecipeReaderPage />} />
      </Routes>
    </Router>
  );
}

export default App;