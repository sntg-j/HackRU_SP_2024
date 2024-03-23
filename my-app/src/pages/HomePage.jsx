import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedItem, setSearchedItem] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Update the URL query parameters with the search term
    navigate(`/?search=${searchTerm}`);

    // Set the searched item
    setSearchedItem(searchTerm);

    // Clear the search term
    setSearchTerm('');

    // Optionally, you can remove the page refresh
    // window.location.reload();
  };



  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Your Grocery List</h1>

      <input
        type="text"
        placeholder="Add your items here"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <button onClick={handleSearchClick}>Search</button>
      {searchedItem && (
        <p>{searchedItem}</p>
      )}
    </div>
  );
}

export default HomePage;