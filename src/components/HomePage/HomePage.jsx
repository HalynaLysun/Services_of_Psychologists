import css from "./HomePage.module.css";
import Feavorite from "../Feavorite/Feavorite.jsx";
import Psychologists from "../Psychologists/Psychologists.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import PsychologistList from "../PsychologistList/PsychologistList.jsx";
import AppointmentForm from "../AppointmentForm/AppointmentForm.jsx";

export default function HomePage({ psychologists }) {
  console.log(psychologists);
  return (
    <>
      <PsychologistList psychologists={psychologists} />
      <AppointmentForm />

      <div className={css.container}>
        <div className={css.nav}>
          <nav>
            <a href={<HomePage />}>
              <span className={css.logo}>psychologists.</span>
              <span className={css.logos}>services</span>
            </a>
          </nav>

          <nav>
            <ul className={css.pages}>
              <li>
                <a href="/homePage">Home</a>
              </li>
              <li>
                <a href="/psychologists">Psychologists</a>
              </li>
              <li>
                <a className={css.feavorite} href="/feavorite">
                  Feavorite
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className={css.auth}>
              <li>
                <a className={css.login} href="/logIn">
                  Log in
                </a>
              </li>
              <li>
                <a className={css.reg} href="/registration">
                  Registration
                </a>
              </li>
            </ul>
          </nav>
          {/* <AuthNav /> */}
        </div>
        {/* <hr /> */}
        <h1>The road to the depths of the human soul</h1>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
      </div>
    </>
  );
}
