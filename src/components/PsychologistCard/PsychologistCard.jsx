import css from "./PsychologistCard.module.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import PsychologistReviews from "../PsychologistReviews/PsychologistReviews.jsx";

export default function PsychologistCard({ psychologist }) {
  const {
    name,
    avatar_url,
    experience,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  } = psychologist;

  const [isFavorite, setIsFavorite] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    return stored.some((p) => p.name === name);
  });

  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;

    if (isFavorite) {
      const alreadyExists = stored.some((p) => p.name === name);
      updated = alreadyExists ? stored : [...stored, psychologist];
    } else {
      updated = stored.filter((p) => p.name !== name);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
  }, [isFavorite, name, psychologist]);

  const handleClick = () => {
    setIsFavorite((prev) => !prev);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 375;

  return (
    <div className={css.card}>
      <div className={css.header}>
        <div className={css.avatarWrap}>
          <img className={css.avatar} src={avatar_url} alt="doctor's picture" />
          <span className={css.onlineDot}></span>
        </div>

        <div className={css.topInfo}>
          <div className={css.titleWrapper}>
            <div className={css.nameGroup}>
              <p className={css.role}>Psychologist</p>
              <h1 className={css.name}>{name}</h1>
            </div>
            <div className={css.ratingBlock}>
              <p className={css.rating}>
                <FaStar color="gold" />
                Rating: <strong>{rating}</strong>
                {!isMobile && <span className={css.line}>|</span>}
              </p>
              <p>
                Price / 1 hour:
                <strong className={css.price}>{price_per_hour}$</strong>
              </p>
              <button className={css.heart} onClick={handleClick}>
                {isFavorite ? (
                  <AiFillHeart color="#3470FF" />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
            </div>
          </div>
          <div className={css.tags}>
            <ul className={css.info}>
              <li className={css.item}>
                <p className={css.tag}>
                  Experience: <span className={css.tagInfo}>{experience}</span>
                </p>
              </li>
              <li className={css.item}>
                <p className={css.tag}>
                  License: <span className={css.tagInfo}>{license}</span>
                </p>
              </li>

              <li className={css.item}>
                <p className={css.tag}>
                  Specialization:{" "}
                  <span className={css.tagInfo}>{specialization}</span>
                </p>
              </li>
              <li className={css.item}>
                <p className={css.tag}>
                  Initial_consultation:{" "}
                  <span className={css.tagInfo}>{initial_consultation}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className={css.about}>{about}</p>
      <a
        className={css.readMore}
        onClick={() => setShowReviews((prev) => !prev)}
      >
        {showReviews ? "Hide" : "Read more"}
      </a>

      {showReviews && <PsychologistReviews psychologist={psychologist} />}
    </div>
  );
}
