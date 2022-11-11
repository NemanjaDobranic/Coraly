import React from "react";
import NotFound from "../pages/NotFound";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import WorkspaceForm from "../pages/signup/WorkspaceForm";
import Profile from "../pages/signup/Profile";
import ResetPassword from "../pages/reset-password/ResetPassword";
import Confirmation, { ConfirmationEnum } from "../components/Confirmation";
import ConfirmPassword from "../pages/reset-password/ConfirmPassword";
import SignupGuard, { SignupEnum } from "../components/guards/SignupGuard";
import ResetPasswordGuard, {
  ResetPasswordEnum,
} from "../components/guards/ResetPasswordGuard";

//login logiku implementirati za naviagte ako je korisnik ulogovan
const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Navigate to="/signup/step1" /> },
  {
    path: "/signup/step1",
    element: (
      <SignupGuard type={SignupEnum.WORKSPACE}>
        <WorkspaceForm />
      </SignupGuard>
    ),
  },
  {
    path: "/signup/email-sent",
    element: (
      <SignupGuard type={SignupEnum.CONFIRMATION}>
        <Confirmation
          header="Your workspace is ready"
          body={
            <span>
              Check your email inbox.
              <br />
              We sent you a confirmation email.
            </span>
          }
          type={ConfirmationEnum.SIGNUP}
        />
      </SignupGuard>
    ),
  },
  {
    path: "/signup/step2",
    element: (
      <SignupGuard type={SignupEnum.PROFILE}>
        <Profile />
      </SignupGuard>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <ResetPasswordGuard type={ResetPasswordEnum.RESET_PASSWORD}>
        <ResetPassword />
      </ResetPasswordGuard>
    ),
  },
  {
    path: "/reset-password/email-sent",
    element: (
      <ResetPasswordGuard type={ResetPasswordEnum.RECEIVED_EMAIL}>
        <Confirmation
          header="Email was sent!"
          body={
            <span>
              Check your email inbox. <br />
              We sent you an email to edit your password. If you didn’t received
              the email, please check your SPAM inbox
            </span>
          }
          type={ConfirmationEnum.RESET_PASSWORD}
        />
      </ResetPasswordGuard>
    ),
  },
  {
    path: "/reset-password/confirmation",
    element: (
      <ResetPasswordGuard type={ResetPasswordEnum.CONFIRM_PASSWORD}>
        <ConfirmPassword />
      </ResetPasswordGuard>
    ),
  },
];

export default routes;
