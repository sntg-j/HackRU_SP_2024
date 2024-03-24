import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedItem, setSearchedItem] = useState('');
  const [savedItems, setSavedItems] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      // Update the URL query parameters with the search term
      navigate(`/?search=${searchTerm}`);

      // Set the searched item
      setSearchedItem(searchTerm);

      // Add the searched item to the saved items
      setSavedItems((prevItems) => [...prevItems, searchTerm]);

      // Clear the search term
      setSearchTerm('');
    }
  };

  const handleRemoveItem = (index) => {
    const newSavedItems = [...savedItems];
    newSavedItems.splice(index, 1);
    setSavedItems(newSavedItems);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Your Grocery List
      </h1>

      <input
        type="text"
        placeholder="Add your items here"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <button onClick={handleSearchClick}>Search</button>
      {savedItems.map((item, index) => (
        <div style={styles.itemContainer}>
          <span>{item}</span>
          <button style={styles.removeButton} onClick={() => handleRemoveItem(index)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  removeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'red',
    fontSize: '1.5em',
    cursor: 'pointer',
  },
};

export default HomePage;