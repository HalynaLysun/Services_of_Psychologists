import { useState, useEffect } from "react";
import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";
import css from "./PsychologistsList.module.css";
import { getPsychologists } from "../../getPsychologists.js";
import Filters from "../Filters/Filters.jsx";

export default function PsychologistsList() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [psychologists, setPsychologists] = useState([]);
  const [displayedPsychologists, setDisplayedPsychologists] =
    useState(psychologists);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPsychologists();
      setPsychologists(data);
      setDisplayedPsychologists(data);
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div>
      <Filters
        psychologists={psychologists}
        onFilterChange={setDisplayedPsychologists}
      />
      <ul>
        {displayedPsychologists.slice(0, visibleCount).map((psychologist) => (
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
