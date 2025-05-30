import HomePage from "./HomePage/HomePage.jsx";
import PsychologistList from "./PsychologistsList/PsychologistsList.jsx";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Favorites/Favorites.jsx";
import Navigation from "./Navigation/Navigation.jsx";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
