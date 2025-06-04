import { useEffect, useState } from "react";
import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);
  return (
    <div>
      <h2>Favorite Psychologists</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((p) => <PsychologistCard key={p.id} psychologist={p} />)
      )}
    </div>
  );
}
