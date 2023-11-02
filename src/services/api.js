import axios from 'axios';
//let axios = require('axios');

const BASE_URL = "http://www.omdbapi.com/?"
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}s=${searchTerm}&apikey=${API_KEY}`);
    return response.data
  } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
  }
};

const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}i=${id}&apikey=${API_KEY}`);
    return response.data
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
}

export { fetchMovies, fetchMovieById };