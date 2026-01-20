import css from "./PsychologistReviews.module.css";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function PsychologistReviews({ psychologist }) {
  const { reviews } = psychologist;

  return (
    <div>
      <ul>
        {reviews.map(({ reviewer, rating, comment }, ind) => (
          <li key={ind} className={css.item}>
            <div className={css.reviewer}>
              <p className={css.avatar}>{reviewer.charAt(0).toUpperCase()}</p>
              <div>
                <h2 className={css.name}>{reviewer}</h2>
                <p>
                  <FaStar color="gold" /> {rating}
                </p>
              </div>
            </div>
            <p className={css.commentText}>{comment}</p>
          </li>
        ))}
      </ul>

      <NavLink className={css.link} to="/appointment" state={{ psychologist }}>
        Make an appointment
      </NavLink>
    </div>
  );
}
