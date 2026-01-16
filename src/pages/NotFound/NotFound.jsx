import css from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={css.wrapper}>
      <h1>404</h1>
      <p>Sorry! Page is not found!</p>
      <Link to="/" className={css.link}>
        Return to home page
      </Link>
    </div>
  );
}
