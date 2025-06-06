export default function RegisterModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          ×
        </button>
        <h2>Registration</h2>
        <p>Please fill the form to register...</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
}
