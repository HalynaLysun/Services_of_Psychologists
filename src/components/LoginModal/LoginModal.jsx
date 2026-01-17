import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-api/db_psychologists.js";
import css from "./LoginModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

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
    <div className="modalOverlay">
      <div className="modalContent">
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="closeButton"
        >
          <AiOutlineClose />
        </button>
        <h2>Log In</h2>
        <p>Welcome back! Please enter your credentials.</p>
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
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}
