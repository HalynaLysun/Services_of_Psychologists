import { useState } from "react";
import css from "./PsychologistReviews.module.css";
import { FaStar } from "react-icons/fa";
import AppointmentForm from "../AppointmentForm/AppointmentForm.jsx";

export default function PsychologistReviews({ reviews }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

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
      {<button onClick={handleClick}>Make an appointment</button>}
      {showModal && <AppointmentForm />}
    </div>
  );
}
