import { signOut } from "firebase/auth";
import { auth } from "../../firebase-api/db_psychologists.js";
import { useNavigate } from "react-router-dom";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      console.log("You logged out successfully");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div>
      <button className={css.logout} type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
