import React from "react";
import GetStarted from "../layouts/GetStarted";
import NotFound from "../pages/NotFound";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

//login logiku implementirati za naviagte ako je korisnik ulogovan
const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/login" />},
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <GetStarted /> },
  { path: "/reset-password", element: <GetStarted /> },
];

export default routes;
