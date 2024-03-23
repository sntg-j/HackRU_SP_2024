import React from 'react';
import { Link } from 'react-router-dom';
import PathFindingPage from '../pages/PathFindingPage';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#29521f', color: 'white' }}>
      <h1> <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none' }}>ShopRoot</Link></h1>
      <div className="links" style={{ display: 'flex', gap: '50px' }}>
        <Link to="/" style={{ 
          color: 'white', 
          textDecoration: 'none' }}>Home</Link>
        <Link to="/PathFindingPage" style={{ 
          color: 'white', 
          borderRadius: '8px',
          textDecoration: 'none' }}>Path</Link>
        <Link to="/RecipeReaderPage" style={{ 
          color: 'white', 
          textDecoration: 'none' }}>Add Recipe</Link>
      </div>
    </nav>
  );
}


export default Navbar;
