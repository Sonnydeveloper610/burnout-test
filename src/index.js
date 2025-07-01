import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initI18n } from "./i18n";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

(async () => {
  await initI18n();
  root.render(<App />);
})();
