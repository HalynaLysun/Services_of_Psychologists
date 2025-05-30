import { useState, useEffect } from "react";
import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";
import css from "./PsychologistsList.module.css";
import { getPsychologists } from "../../getPsychologists.js";

export default function PsychologistsList() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [psychologists, setPsychologists] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Записувати фаворитів у локал сторедж і читати по id

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPsychologists();
      setPsychologists(data);
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div>
      <ul>
        {psychologists.slice(0, visibleCount).map((psychologist) => (
          <li key={psychologist.id}>
            <PsychologistCard
              psychologist={psychologist}
              onToggleFavorite={toggleFavorite}
              isCardFavorite={favorites.includes(psychologist.id)}
            />
          </li>
        ))}
      </ul>
      {visibleCount < psychologists.length && (
        <button onClick={handleLoadMore} className={css.loader}>
          Load more
        </button>
      )}
    </div>
  );
}
