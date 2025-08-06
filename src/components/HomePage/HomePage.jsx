import css from "./HomePage.module.css";
import picturePsychologoist from "../../img/Psychologist.jpg";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <div>
          <h1 className={css.title}>
            The road to the depths of the human soul
          </h1>
          <p className={css.text}>
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <NavLink className={css.button} to="/psychologists">
            Get started
          </NavLink>
        </div>
        <img src={picturePsychologoist} alt="Psychologist" />
      </div>
    </>
  );
}
