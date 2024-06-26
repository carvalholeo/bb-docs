import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./lib/reportWebVitals";

import App from "./App";
import DarkModeProvider from "./contexts/DarkModeContext";
import { analyticsActions } from "./services/analytics";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </DarkModeProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(analyticsActions);
