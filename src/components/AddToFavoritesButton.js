// src/components/AddToFavoritesButton.js
import React, { useEffect, useState } from 'react';
import movieService from '../services/movieService';

const AddToFavoritesButton = ({ movie, onAddToFavorites, searchTerm }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [fireMovies, setFireMovies] = useState([]);
  const [loaded, setLoaded] = useState(false); // New state to track whether data is loaded

  useEffect(() => {
    checkIsFavorite();
  }, [isFavorite, searchTerm]);

  const checkIsFavorite = async () => {
    try {
      const movies = await movieService.getFavoriteMovies();
      setFireMovies(movies);
      const isMovieInFavorites = movies.some((favMovie) => favMovie.imdbID === movie.imdbID);
      setIsFavorite(isMovieInFavorites);
      setLoaded(true);
    } catch (error) {
      console.error('Error checking if movie is in favorites:', error);
    }
  };

  const handleToggleFavorites = async () => {
    try {
      if (isFavorite) {
        const foundMovie = fireMovies.find(fmovie => fmovie.imdbID === movie.imdbID);
        await movieService.deleteMovie(foundMovie.id);
      } else {
        await movieService.addMovie(movie);
      }

      if (onAddToFavorites) {
        onAddToFavorites(movie);
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorites:', error);
    }
  };

  return (
    <button onClick={handleToggleFavorites}>
      {loaded ? (isFavorite ? 'Remove from Favorites' : 'Add to Favorites') : 'Loading...'}
    </button>
  );
};

export default AddToFavoritesButton;