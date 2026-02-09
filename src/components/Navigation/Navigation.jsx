import AuthNav from "../AuthNav/AuthNav.jsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";
import UserMenu from "../UserMenu/UserMenu.jsx";

export default function Navigation() {
  const { isLoggedIn, isLoading } = useAuth();

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
            <NavLink
              to="/"
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              className={({ isActive }) => (isActive ? css.activeLink : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/psychologists"
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              className={({ isActive }) => (isActive ? css.activeLink : "")}
            >
              Psychologists
            </NavLink>
          </li>
          <li>
            {!isLoading && isLoggedIn && (
              <NavLink
                to="/favorites"
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                className={({ isActive }) => (isActive ? css.activeLink : "")}
              >
                Favorites
              </NavLink>
            )}
          </li>
        </ul>
      </nav>

      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </div>
  );
}
