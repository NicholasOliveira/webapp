import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Ut73tGl3D_-TrKRkMorclYVC3Gd7jmY",
  authDomain: "webapp-7fef4.firebaseapp.com",
  projectId: "webapp-7fef4",
  storageBucket: "webapp-7fef4.appspot.com",
  messagingSenderId: "941777468501",
  appId: "1:941777468501:web:414d6e9adcba6ddf73a8dc",
  measurementId: "G-QKCXB9J2T7"
};
export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();
