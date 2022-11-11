import React from "react";
import NotFound from "../pages/NotFound";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import WorkspaceForm from "../pages/signup/WorkspaceForm";
import Profile from "../pages/signup/Profile";
import ResetPassword from "../pages/reset-password/ResetPassword";
import Confirmation from "../components/Confirmation";
import ConfirmPassword from "../pages/reset-password/ConfirmPassword";
import SignupRoute, { SignupEnum } from "../components/routes/SignupRoute";

//login logiku implementirati za naviagte ako je korisnik ulogovan
const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Navigate to="/signup/step1" /> },
  {
    path: "/signup/step1",
    element: (
      <SignupRoute type={SignupEnum.STEP_ONE}>
        <WorkspaceForm />
      </SignupRoute>
    ),
  },
  {
    path: "/signup/email-sent",
    element: (
      <SignupRoute type={SignupEnum.CONFIRMATION}>
        <Confirmation
          header="Your workspace is ready"
          body={
            <span>
              Check your email inbox.
              <br />
              We sent you a confirmation email.
            </span>
          }
        />
      </SignupRoute>
    ),
  },
  {
    path: "/signup/step2",
    element: (
      <SignupRoute type={SignupEnum.STEP_TWO}>
        <Profile />
      </SignupRoute>
    ),
  },
  { path: "/reset-password", element: <ResetPassword /> },
  {
    path: "/reset-password/email-sent",
    element: (
      <Confirmation
        header="Email was sent!"
        body={
          <span>
            Check your email inbox. <br />
            We sent you an email to edit your password. If you didn’t received
            the email, please check your SPAM inbox
          </span>
        }
      />
    ),
  },
  { path: "/reset-password/confirmation", element: <ConfirmPassword /> },
];

export default routes;
