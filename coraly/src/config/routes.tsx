import React from "react";
import GetStarted from "../layouts/GetStarted";
import { Navigate } from "react-router-dom";

//login logiku implementirati za naviagte ako je korisnik ulogovan
const routes = [
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <GetStarted /> },
  { path: "/signup", element: <GetStarted /> },
  { path: "/reset-password", element: <GetStarted /> },
];

export default routes;
