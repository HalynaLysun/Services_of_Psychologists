import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { useAuth } from "../../hooks/useAuth.js";

export default function AuthNav() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <div className={css.auth}>
        <button className={css.login} onClick={() => setModal("login")}>
          Log In
        </button>
        <button className={css.reg} onClick={() => setModal("register")}>
          Registration
        </button>
      </div>

      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "register" && <RegisterModal onClose={() => setModal(null)} />}
    </>
  );
}
