// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add routes for other pages here */}
      </Routes>
    </Router>
  );
}

export default App;
