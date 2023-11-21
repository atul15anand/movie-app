import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getFirestore } from 'firebase/firestore';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBoFBkeuLKyVNipcnZGOJ6kA1LVOI5vfrY",
  authDomain: "movie-app-d86b6.firebaseapp.com",
  projectId: "movie-app-d86b6",
  storageBucket: "movie-app-d86b6.appspot.com",
  messagingSenderId: "494975392528",
  appId: "1:494975392528:web:157c66e0324e13d904a395"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export { app, db };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
