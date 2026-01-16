import { AiOutlineClose } from "react-icons/ai";
import css from "./AppointmentForm.module.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleSubmit } from "../../firebase-api/push_appointment.js";
import AppointmentFormInner from "../AppointmentFormInner/AppointmentFormInner.jsx";

export default function AppointmentForm() {
  const [showTimeOptions, setShowTimeOptions] = useState(false);
  const [selectedHours, setSelectedHours] = useState([]);
  const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

  const navigate = useNavigate();
  const { state } = useLocation();
  const psychologist = state?.psychologist;
  const { name, avatar_url } = psychologist || {};
  const today = new Date().toISOString().split("T")[0];

  const initialValues = {
    name: "",
    phone: "",
    date: today,
    time: "",
    email: "",
    comment: "",
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.code === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClose = () => navigate(-1);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    date: Yup.date()
      .min(today, "Date cannot be in the past")
      .required("Required"),
    time: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    comment: Yup.string(),
  });

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.card}>
        <button
          className={css.closeBtn}
          onClick={handleClose}
          aria-label="Close modal"
        >
          <AiOutlineClose />
        </button>

        <h2 className={css.title}>
          Make an appointment
          <br />
          with a psychologists
        </h2>
        <p className={css.subtitle}>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment...
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <AppointmentFormInner
            times={times}
            selectedHours={selectedHours}
            setSelectedHours={setSelectedHours}
            showTimeOptions={showTimeOptions}
            setShowTimeOptions={setShowTimeOptions}
            avatar_url={avatar_url}
            name={name}
          />
        </Formik>
      </div>
    </div>
  );
}
