import css from "./GlobalErrorPage.module.css";
export default function GlobalErrorPage() {
  return (
    <div className={css.container}>
      <h1>Oops! Something wrong</h1>
      <button className={css.button} onClick={() => window.location.reload()}>
        Reload the page
      </button>
    </div>
  );
}
