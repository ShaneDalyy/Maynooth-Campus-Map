// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCt0FfXrXp8jO3kOpVuNxI-v27imMg8Yww",
  authDomain: "cs353project-a2de4.firebaseapp.com",
  projectId: "cs353project-a2de4",
  storageBucket: "cs353project-a2de4.appspot.com",
  messagingSenderId: "720102320755",
  appId: "1:720102320755:web:a8c9e418ad8cbd125e9806",
  measurementId: "G-1R4KC6B5BK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);