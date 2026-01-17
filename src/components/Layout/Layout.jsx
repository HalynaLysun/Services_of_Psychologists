import css from "./Layout.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />

      <main className={css.main}>
        <Suspense
          fallback={<div className={css.loaderWrapper}>Loading page...</div>}
        >
          {children}
        </Suspense>
      </main>

      <footer className={css.footer}>© 2026 Psychological help</footer>
    </div>
  );
}
