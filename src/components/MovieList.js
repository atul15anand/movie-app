// src/components/MovieList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies, searchMovies } from '../services/api.js';
import AddToFavoritesButton from './AddToFavoritesButton';
import SearchBar from './SearchBar'; // Import the SearchBar component


const MovieList = ({ onAddToFavorites }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  useEffect(() => {
    const fetchMoviesByTerm = async () => {
      if (searchTerm) {
        const data = await searchMovies(searchTerm);
        setMovies(data);
      } else {
        const data = await fetchMovies();
        setMovies(data);
      }
    };

    fetchMoviesByTerm();
  }, [searchTerm]);

  const handleAddToFavorites = (movie) => {
    if (onAddToFavorites) {
      onAddToFavorites(movie);
    }
  };

  return (
    <div style={{padding: 24}}>
      <h1>Latest Movies</h1>
      <SearchBar onSearch={handleSearch} />
      <p>Search Term: {searchTerm}</p>
      <a href="/favorites">All Favorite</a>
      <ul>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div style={{display: "flex"}}>
                <Link to={`/movie/${movie.imdbID}`}>
                    <img src={movie.Poster} alt="Film Poster"></img>
                </Link>
            </div>
            <div style={{padding: 16}}>
                <Link to={`/movie/${movie.imdbID}`} style={{padding: "0px 8px"}}>{movie.Title}</Link>
                <AddToFavoritesButton movie={movie} onAddToFavorites={handleAddToFavorites} searchTerm={searchTerm} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;