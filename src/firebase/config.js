// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL5frnFVHPrizWtC0KN8tHksCPH29P6cY",
  authDomain: "portfolio-personal-b70b2.firebaseapp.com",
  projectId: "portfolio-personal-b70b2",
  storageBucket: "portfolio-personal-b70b2.appspot.com",
  messagingSenderId: "862241078020",
  appId: "1:862241078020:web:04ea38d61b8118850cae51",
  measurementId: "G-WND0B6G71C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
