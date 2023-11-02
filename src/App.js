import React from 'react';
import { MovieProvider } from './context/MovieContext';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div>
      <MovieProvider>
        <SearchBar />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
