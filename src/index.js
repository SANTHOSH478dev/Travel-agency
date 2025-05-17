import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext"; // ✅ Import

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      {/* ✅ Wrap App in AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
