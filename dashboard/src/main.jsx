import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3002";
axios.defaults.withCredentials = true; // ← CRUCIAL: send the HttpOnly cookie

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
