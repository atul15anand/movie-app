import axios from 'axios';

const API_KEY = '669e8e31';

export const fetchMovies = async () => {
  const response = await axios.get(`http://www.omdbapi.com/?s=latest&apikey=${API_KEY}`);
  return response.data.Search;
};

export const searchMovies = async (searchTerm) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
    return response.data.Search;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
  return response.data;
};
