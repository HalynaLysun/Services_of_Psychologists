import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiClock } from "react-icons/fi";
import css from "./AppointmentForm.module.css";

export default function AppointmentForm() {
  const initialValues = {
    name: "",
    phone: "",
    time: "",
    email: "",
    comment: "",
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
    <div className={css.card}>
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
        <img
          src="https://i.pravatar.cc/48"
          alt="Doctor"
          className={css.avatar}
        />
        <div>
          <div className={css.label}>Your psychologist</div>
          <div className={css.name}>Dr. Sarah Davis</div>
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
              <Field name="time" type="time" className={css.input} />
              <FiClock className={css.icon} />
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
