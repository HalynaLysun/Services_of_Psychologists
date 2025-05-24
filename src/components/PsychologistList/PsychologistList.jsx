import { useState } from "react";
import PsychologistCard from "../PsychologistCard/PsychologistCard.jsx";
import css from "./PsychologistList.module.css";

export default function PsychologistList({ psychologists }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div>
      <ul>
        {psychologists.slice(0, visibleCount).map((psychologist, ind) => (
          <li key={ind}>
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
