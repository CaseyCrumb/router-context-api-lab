import React, { useState, useContext } from 'react';
import { fetchMovies } from '../services/api';
import { MovieContext } from '../context/MovieContext';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setState } = useContext(MovieContext);

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const data = await fetchMovies(searchTerm);
        setState(prevState => ({ ...prevState, movies: data.Search }));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;