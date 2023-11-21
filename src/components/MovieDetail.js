// src/components/MovieDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovieDetails(data);
    };

    fetchDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{padding: 24}}>
      <a href="/">Home</a>
      <h1>{movieDetails.Title}</h1>
      <p>{movieDetails.Plot}</p>
      <img src={movieDetails.Poster}></img>
      <p>Released: {movieDetails.Released}</p>
      <p>Genre: {movieDetails.Genre}</p>
      <p>Director: {movieDetails.Director}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetail;