import HomePage from "./HomePage/HomePage.jsx";
import psychologists from "../psychologists.json";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBFc1R1dG3S0XdE2mUB4M08j00ywzEkAQc",
    authDomain: "services-of-psychologists.firebaseapp.com",
    projectId: "services-of-psychologists",
    storageBucket: "services-of-psychologists.firebasestorage.app",
    messagingSenderId: "123447217505",
    appId: "1:123447217505:web:9fdbe2f90844483af80920",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <>
      <HomePage psychologists={psychologists} />
    </>
  );
}
