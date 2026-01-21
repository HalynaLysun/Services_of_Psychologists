import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/common/ErrorBoundary.jsx";
import GlobalErrorPage from "./components/common/GlobalErrorPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<GlobalErrorPage />}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
