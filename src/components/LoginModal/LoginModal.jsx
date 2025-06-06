import css from "./LoginModal.module.css";
export default function LoginModal({ onClose }) {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeButton}>
          ×
        </button>
        <h2>Log In</h2>
        <p>Welcome back! Please enter your credentials...</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Log In</button>
      </div>
    </div>
  );
}
