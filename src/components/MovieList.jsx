import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieItem from './MovieItem';

const MovieList = () => {
  const { state } = useContext(MovieContext);
  const movies = state.movies || [];

  return (
    <div className="movie-list">
      {movies.map(movie => <MovieItem key={movie.imdbID} movie={movie} />)}
    </div>
  );
};

export default MovieList;