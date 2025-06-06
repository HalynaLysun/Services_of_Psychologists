import css from "./PsychologistReviews.module.css";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function PsychologistReviews({ reviews }) {
  return (
    <div>
      <ul>
        {reviews.map((review, ind) => (
          <li key={ind}>
            <div className={css.reviewer}>
              <p className={css.avatar}>M</p>
              <div>
                <h1>{review.reviewer}</h1>
                <p>
                  <FaStar color="gold" /> {review.rating}
                </p>
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <NavLink to="/appointment">Make an appointment</NavLink>

    </div>
  );
}
