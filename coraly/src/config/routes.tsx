import React from "react";
import GetStarted from "../layouts/GetStarted";
import NotFound from "../pages/NotFound";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import WorkspaceForm from "../pages/Signup/WorkspaceForm";
import Confirmation from "../pages/Signup/Confirmation";
import Profile from "../pages/Signup/Profile";

//login logiku implementirati za naviagte ako je korisnik ulogovan
const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Navigate to="/signup/step1" /> },
  { path: "/signup/step1", element: <WorkspaceForm /> },
  { path: "/signup/email-sent", element: <Confirmation /> },
  { path: "/signup/step2", element: <Profile /> },
  { path: "/reset-password", element: <GetStarted /> },
];

export default routes;
