import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../db_psychologists.js";
import css from "./LoginModal.module.css";

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Вы успешно вошли!");
      onClose();
    } catch (error) {
      alert("Ошибка входа: " + error.message);
    }
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeButton}>
          ×
        </button>
        <h2>Log In</h2>
        <p>Welcome back! Please enter your credentials...</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}
