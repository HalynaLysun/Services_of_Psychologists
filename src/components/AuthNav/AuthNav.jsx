import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <nav className={css.auth}>
        <NavLink className={css.login} to="/register">
          Registration
        </NavLink>
        <NavLink className={css.reg} to="/login">
          Log In
        </NavLink>
      </nav>
    </div>
  );
}
