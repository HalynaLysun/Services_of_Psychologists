import AuthNav from "../AuthNav/AuthNav.jsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={css.nav}>
      <nav className={css.logo}>
        <NavLink to="/">
          <span className={css.logoLeft}>psychologists.</span>
          <span className={css.logoRight}>services</span>
        </NavLink>
      </nav>

      <nav>
        <ul className={css.pages}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/psychologists">Psychologists</NavLink>
          </li>
          <li>
            <NavLink className={css.feavorite} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <AuthNav />
    </div>
  );
}
