// src/components/FavoriteMovies.js
import React, { useState, useEffect } from 'react';
import movieService from '../services/movieService';

const FavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchFavoriteMovies = async () => {
    try {
      const movies = await movieService.getFavoriteMovies();
      setFavoriteMovies(movies);
    } catch (error) {
      console.error('Error fetching favorite movies:', error);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    try {
      await movieService.deleteMovie(movieId);
      fetchFavoriteMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div style={{padding: 24}}>
      <a href="/">Home</a>
      <h1>Favorite Movies</h1>
      {favoriteMovies.length> 0 ? 
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id}>
            <div><b>Title:</b> {movie.Title}</div>
            <div><b>Type:</b> {movie.Type}</div>
            <div><b>Release:</b> {movie.Year}</div>
            <img src={movie.Poster} alt={movie.Title} />
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete From Favorite</button>
            <br /><br/>
          </li>
        ))}
      </ul>
        : 
        <div>No Movies added</div>
      }
    </div>
  );
};

export default FavoriteMovies;