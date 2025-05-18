import css from "./PsychologistCard.module.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { useState } from "react";

export default function PsychologistCard({
  psychologist: {
    name,
    avatar_url,
    experience,
    reviews,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  },
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={css.card}>
      <div className={css.header}>
        <div className={css.avatarWrap}>
          <img className={css.avatar} src={avatar_url} alt={name} />
          <span className={css.onlineDot}></span>
        </div>

        <div className={css.topInfo}>
          <p className={css.role}>Psychologist</p>
          <h2 className={css.name}>{name}</h2>

          <div className={css.tags}>
            <span className={css.tag}>
              Experience: <strong>{experience}</strong>
            </span>
            <span className={css.tag}>
              License: <strong>{license}</strong>
            </span>
          </div>
          <div className={css.tags}>
            <span className={css.tag}>
              Specialization: <strong>{specialization}</strong>
            </span>
            <span className={css.tag}>
              Initial_consultation: <strong>{initial_consultation}</strong>
            </span>
          </div>
        </div>

        <div className={css.ratingBlock}>
          <FaStar color="gold" /> Rating: <strong>{rating}</strong> | Price / 1
          hour: <span className={css.price}>{price_per_hour}$</span>
          <button className={css.heart}>
            {isFavorite ? <AiFillHeart color="black" /> : <AiOutlineHeart />}
          </button>
        </div>
      </div>

      <p className={css.about}>{about}</p>
      <a href="#" className={css.readMore}>
        Read more
      </a>
    </div>
  );
}
