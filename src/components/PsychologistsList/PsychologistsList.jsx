import { useState, useEffect } from "react";
import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";
import css from "./PsychologistsList.module.css";
import { getPsychologists } from "../../getPsychologists.js";

export default function PsychologistsList() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [psychologists, setPsychologists] = useState([]);

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
            <PsychologistCard psychologist={psychologist} />
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
