// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_U-79g2pPR1YMbJ8zAW5HoJZC5BhBqU",
  authDomain: "hosting-ddf50.firebaseapp.com",
  projectId: "hosting-ddf50",
  storageBucket: "hosting-ddf50.firebasestorage.app",
  messagingSenderId: "2185439739",
  appId: "1:2185439739:web:1fd6a42f3854389a4f835e",
  measurementId: "G-R63KQW11W2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
