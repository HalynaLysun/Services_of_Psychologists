import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase-api/db_psychologists.js";
import css from "./RegisterModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

export default function RegisterModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleRegister = async () => {
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await sendEmailVerification(user);

      setSuccess(
        "Registration successful! Please check your email to verify your account.",
      );
      handleClose();
    } catch (error) {
      setError("Ошибка регистрации: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
    onClose();
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button
          className="closeButton"
          aria-label="Close modal"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
        <h2>Registration</h2>
        <p>Please fill the form to register.</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isLoading}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit" onClick={handleRegister} disabled={isLoading}>
          {isLoading ? "Регистрация..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
