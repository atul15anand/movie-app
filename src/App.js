import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import FavoriteMovies from './components/FavoriteMovies';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;