import { Form, Field, ErrorMessage, useFormikContext } from "formik";

import { FiClock } from "react-icons/fi";
import css from "./AppointmentFormInner.module.css";

import { useEffect } from "react";

import { fetchOccupiedHours } from "../../firebase-api/chek_date_of_appointment.js";

export default function AppointmentFormInner({
  times,
  selectedHours,
  setSelectedHours,
  showTimeOptions,
  setShowTimeOptions,
  avatar_url,
  name,
}) {
  const { values, setFieldValue } = useFormikContext();
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!values.date) return;

    const getHours = async () => {
      try {
        const busy = await fetchOccupiedHours(values.date);
        setSelectedHours(busy);
        setFieldValue("time", "");
      } catch (error) {
        console.error("Failed to fetch hours:", error);
      }
    };

    getHours();
  }, [values.date, setFieldValue, setSelectedHours]);

  return (
    <Form className={css.form}>
      <div className={css.doctorInfo}>
        <img src={avatar_url} alt="Doctor" className={css.avatar} />
        <div>
          <div className={css.label}>Your psychologist</div>
          <div className={css.name}>{name}</div>
        </div>
      </div>

      <div className={css.fieldGroup}>
        <Field
          name="name"
          type="text"
          placeholder="Name"
          className={css.input}
        />
        <ErrorMessage name="name" component="div" className={css.error} />
      </div>

      <div className={css.fieldGroup}>
        <Field
          name="phone"
          type="text"
          placeholder="+380"
          className={css.input}
        />
        <ErrorMessage name="phone" component="div" className={css.error} />
      </div>

      <div className={css.row}>
        <div className={css.fieldGroup}>
          <Field name="time">
            {({ field }) => (
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
                    {times.map((time) => {
                      const isBusy = selectedHours.includes(time);
                      return (
                        <li
                          key={time}
                          className={isBusy ? css.disabledOption : ""}
                          onClick={() => {
                            if (isBusy) return;
                            setFieldValue("time", time);
                            setShowTimeOptions(false);
                          }}
                        >
                          {time} {isBusy && "(occupied)"}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            )}
          </Field>
          <ErrorMessage name="time" component="div" className={css.error} />
        </div>
        <div className={css.fieldGroup}>
          <Field
            name="date"
            type="date"
            min={today}
            className={`${css.input} ${css.dateField}`}
          />
          <ErrorMessage name="date" component="div" className={css.error} />
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
        <ErrorMessage name="comment" component="div" className={css.error} />
      </div>

      <button type="submit" className={css.button}>
        Send
      </button>
    </Form>
  );
}
