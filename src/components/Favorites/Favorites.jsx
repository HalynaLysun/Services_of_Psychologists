import { useEffect, useState } from "react";
import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";
import Filters from "../Filters/Filters.jsx";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [displayedPsychologists, setDisplayedPsychologists] =
    useState(favorites);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);
  return (
    <div>
      <Filters
        psychologists={favorites}
        onFilterChange={setDisplayedPsychologists}
      />
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        displayedPsychologists.map((p) => (
          <PsychologistCard key={p.id} psychologist={p} />
        ))
      )}
    </div>
  );
}
