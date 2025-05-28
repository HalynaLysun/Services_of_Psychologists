import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFc1R1dG3S0XdE2mUB4M08j00ywzEkAQc",
  authDomain: "services-of-psychologists.firebaseapp.com",
  databaseURL:
    "https://services-of-psychologists-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "services-of-psychologists",
  storageBucket: "services-of-psychologists.firebasestorage.app",
  messagingSenderId: "123447217505",
  appId: "1:123447217505:web:9fdbe2f90844483af80920",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db };
