import css from "./PsychologistReviews.module.css";
import { FaStar } from "react-icons/fa";

export default function PsychologistReviews({ reviews }) {
  return (
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
  );
}
