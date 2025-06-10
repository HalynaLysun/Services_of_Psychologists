import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiClock } from "react-icons/fi";
import css from "./AppointmentForm.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AppointmentForm() {
  const initialValues = {
    name: "",
    phone: "",
    time: "",
    email: "",
    comment: "",
  };

  const [showTimeOptions, setShowTimeOptions] = useState(false);
  const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

  const navigate = useNavigate();
  const { state } = useLocation();

  const psychologist = state?.psychologist;

  const { name, avatar_url } = psychologist;

  const handleClose = () => {
    navigate(-1);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    comment: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log("Form data:", values);
  };
  return (
    <div className={css.card} onClick={handleBackdropClick}>
      <button className={css.closeBtn} onClick={handleClose}>
        <AiOutlineClose />
      </button>

      <h2 className={css.title}>
        Make an appointment
        <br />
        with a psychologists
      </h2>
      <p className={css.subtitle}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist.
      </p>
      <div className={css.doctorInfo}>
        <img src={avatar_url} alt="Doctor" className={css.avatar} />
        <div>
          <div className={css.label}>Your psychologist</div>
          <div className={css.name}>{name}</div>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <div className={css.fieldGroup}>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.row}>
            <div className={css.fieldGroup}>
              <Field
                name="phone"
                type="text"
                placeholder="+380"
                className={css.input}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={css.error}
              />
            </div>

            <div className={`${css.fieldGroup} ${css.timeWrapper}`}>
              <Field name="time">
                {({ field, form }) => (
                  <div className={css.customTimeWrapper}>
                    <div
                      className={css.customTimeInput}
                      onClick={() => setShowTimeOptions((prev) => !prev)}
                    >
                      {field.value || "00:00"}
                      <FiClock className={css.icon} />
                    </div>

                    {showTimeOptions && (
                      <ul className={css.dropdown}>
                        {times.map((time) => (
                          <li
                            key={time}
                            onClick={() => {
                              form.setFieldValue("time", time);
                              setShowTimeOptions(false);
                            }}
                          >
                            {time}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </Field>

              <ErrorMessage name="time" component="div" className={css.error} />
            </div>
          </div>

          <div className={css.fieldGroup}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.fieldGroup}>
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={css.textarea}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
