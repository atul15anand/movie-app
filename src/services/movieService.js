// src/services/movieService.js

import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { app, db } from '../index.js';

const movieService = {
  getMovies: async () => {
    const querySnapshot = await getDocs(collection(db, 'movies'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  addMovie: async (movie) => {
    const docRef = await addDoc(collection(db, 'movies'), movie);
    return docRef.id;
  },

  deleteMovie: async (movieId) => {
    await deleteDoc(doc(db, 'movies', movieId));
  },

  getFavoriteMovies: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'movies'));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },
};

export default movieService;
