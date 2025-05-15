import HomePage from "./HomePage/HomePage.jsx";
import psychologists from "../psychologists.json";

export default function App() {
  console.log(psychologists[0].avatar_url);
  return (
    <>
      <HomePage psychologists={psychologists} />
    </>
  );
}
