import HomePage from "./HomePage/HomePage.jsx";
import psychologists from "../psychologists.json";

export default function App() {
  console.log(psychologists.name);
  return (
    <>
      <HomePage psychologists={psychologists.psychologists} />
    </>
  );
}
