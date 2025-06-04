import css from "./PsychologistCard.module.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import PsychologistReviews from "../PsychologistReviews/PsychologistReviews.jsx";

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
  const [showReviews, setShowReviews] = useState(false);

  const [favorite, setFavorite] = useState(() => {
    const storedFavorites = localStorage.getItem("favorite");
    return storedFavorites !== null ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const handleClick = () => {
    setFavorite((favorite) => {
      if (favorite.includes(name)) {
        return favorite.filter((n) => n !== name);
      } else {
        return [...favorite, name];
      }
    });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={css.card}>
      <div className={css.header}>
        <div className={css.avatarWrap}>
          <img className={css.avatar} src={avatar_url} alt={name} />
          <span className={css.onlineDot}></span>
        </div>

        <div className={css.topInfo}>
          <p className={css.role}>Psychologist</p>
          <h1 className={css.name}>{name}</h1>

          <div className={css.tags}>
            <ul className={css.info}>
              <li className={css.item}>
                <p className={css.tag}>
                  License: <strong>{license}</strong>
                </p>
              </li>
              <li className={css.item}>
                <p className={css.tag}>
                  Experience: <strong>{experience}</strong>
                </p>
              </li>
              <li className={css.item}>
                <p className={css.tag}>
                  Specialization: <strong>{specialization}</strong>
                </p>
              </li>
              <li className={css.item}>
                <p className={css.tag}>
                  Initial_consultation: <strong>{initial_consultation}</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.ratingBlock}>
          <FaStar color="gold" /> Rating: <strong>{rating}</strong> | Price / 1
          hour: <span className={css.price}>{price_per_hour}$</span>
          <button className={css.heart} onClick={handleClick}>
            {isFavorite ? <AiFillHeart color="#3470FF" /> : <AiOutlineHeart />}
          </button>
        </div>
      </div>

      <p className={css.about}>{about}</p>
      <button
        className={css.readMore}
        onClick={() => setShowReviews((prev) => !prev)}
      >
        {showReviews ? "Hide" : "Read more"}
      </button>

      {showReviews && <PsychologistReviews reviews={reviews} />}
    </div>
  );
}
