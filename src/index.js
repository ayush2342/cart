import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOILbDzRwco3521mxXzNZ3yBwwk65s-pI",
  authDomain: "cart-b9c35.firebaseapp.com",
  projectId: "cart-b9c35",
  storageBucket: "cart-b9c35.appspot.com",
  messagingSenderId: "468882401688",
  appId: "1:468882401688:web:11c0ad71daa591c5c263ed"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

export default app;


