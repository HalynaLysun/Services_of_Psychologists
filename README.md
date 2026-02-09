<!-- Регистрация
порпавити трохи дизайн при успішній або неуспішній реєстрації та логіні, замість алертів поставити бібліотеку, та закривати модалки автоматично

Сделать фаворитов закрытыми до логинизации???
и сделать при входе иконку пользователя вместо логін -->

🧠 Psychologist Services Platform
A modern web application designed to connect users with professional psychologists. This project is built with a focus on performance, scalability, and seamless user experience. I decided to keep the state management simple using React Props and local state. Since the component tree is shallow, this approach keeps the code clean and avoids unnecessary complexity. For the Favorites page, I chose to fetch data independently to ensure the user always gets the most up-to-date information directly from the database.

Project Status: Ongoing
This project is currently in the secondary development phase.
Phase 1 (Completed): MVP with core filtering and Firebase integration.
Phase 2 (Active):

- UI/UX optimization and responsive design.
- Error handling improvements.
- Upcoming: Secure User Authentication & Private Dashboard

✨ Features Implemented
Psychologists Directory: A list of professionals with detailed profiles and reviews.

Dynamic Booking System: A responsive appointment modal with time-slot management and mobile-optimized layouts.

Error Handling: Integrated a global Error Boundary to ensure application stability and a professional user experience even during unexpected failures

Responsive Design: Fully adaptive interface, optimized for mobile, tablet (760px), and desktop views.

User Authentication: Secure sign-up and login system powered by Firebase Auth.

Personalized Experience: Unique "Favorites" page for each user, with data persisted in real-time.

Persistent Session: Users stay logged in even after page refreshes, thanks to custom useAuth hook and Firebase's session management.

🛠 Tech Stack
Core: React
Routing: React Router DOM
Styling: CSS Modules
Icons: React Icons

🚀 Planned Improvements & Roadmap
To transition this project into a professional commercial product, the following updates are planned:

🔒 Security & Data Privacy
Compliance: Add a "Personal Data Processing Consent" checkbox to all forms (Appointment, Login, Registration).

📈 Functionality & UI/UX
Extended User Authentication: Update the sign-up modal to include a "Username" field and implement updateProfile (Firebase Auth) to store and display the user's name across the application.

Advanced Notifications: Replace standard browser alerts with a modern notification library (e.g., React Hot Toast or Toastify) to improve user feedback for login and registration events.

Pagination: Implement pagination for the Favorites page to handle large datasets efficiently.

Enhanced Calendar: Integrate react-datepicker to provide a better UI and "gray out" fully booked dates.

Interactive Review & Rating System\*\*:

- Enable authenticated users to leave feedback and star ratings.
- Implement pagination for the reviews section to optimize performance.

📝 Note for Reviewers

Security Note: Access to the "Favorites" page is strictly protected and visible only to authorized users. Unauthorized users are redirected to the Home page to ensure data privacy.

Professional Readiness: The architecture is designed to be easily extendable for real-world commercial use
