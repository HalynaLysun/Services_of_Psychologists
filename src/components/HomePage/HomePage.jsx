import css from "./HomePage.module.css";
import picturePsychologoist from "../../img/Psychologist.jpg";

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
        </div>
        <img src={picturePsychologoist} alt="Psychologist" />
      </div>
    </>
  );
}
