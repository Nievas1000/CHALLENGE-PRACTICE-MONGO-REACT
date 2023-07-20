import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/user.js";
import "./App.css";
import "./styles/LoadFilesZone.css";
import "./styles/Navbar.css";
import "./styles/UserList.css";
import "./styles/NoDataCard.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
