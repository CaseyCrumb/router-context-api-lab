import React from 'react';
import { MovieProvider } from './context/MovieContext';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import HomePage from './pages/HomePage';
import './App.css';


function App() {
  return (
    <div>
      <MovieProvider>
        <HomePage />
        <SearchBar />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
