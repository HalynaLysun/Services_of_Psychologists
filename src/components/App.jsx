import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoginModal from "./LoginModal/LoginModal.jsx";
import Layout from "./Layout/Layout.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const PsychologistList = lazy(
  () => import("../pages/PsychologistsList/PsychologistsList.jsx"),
);
const Favorites = lazy(() => import("../pages/Favorites/Favorites.jsx"));
const AppointmentForm = lazy(
  () => import("./AppointmentForm/AppointmentForm.jsx"),
);
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
