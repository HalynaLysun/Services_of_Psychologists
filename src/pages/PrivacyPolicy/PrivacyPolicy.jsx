import css from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Privacy Policy</h1>
        <p className={css.lastUpdated}>Last updated: February 18, 2026</p>

        <div className={css.content}>
          <h2>1. General Information</h2>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our platform to book consultations with
            professional psychologists.
          </p>

          <h2>2. Data We Collect</h2>
          <ul>
            <li>
              <strong>Identification Data:</strong> Full name.
            </li>
            <li>
              <strong>Contact Information:</strong> Email address and phone
              number.
            </li>
            <li>
              <strong>Booking Details:</strong> Date, time, and the chosen
              specialist.
            </li>
          </ul>

          <h2>3. Purpose of Processing</h2>
          <p>
            We process your data only for managing your appointments and
            allowing the psychologist to contact you regarding the session.
          </p>

          <h2>4. Data Storage and Security</h2>
          <p>
            All data is stored securely using Firebase. We implement strict
            security measures to prevent unauthorized access.
          </p>

          <h2>5. Your Rights (GDPR)</h2>
          <p>
            Under the GDPR, you have the right to access, correct, or request
            the deletion of your personal data at any time.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions, please contact us at:{" "}
            <strong>galina.lysun88th@gmail.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
