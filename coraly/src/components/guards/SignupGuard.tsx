import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { IRootState } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import { createWorkspace } from "../../redux";
import { signupKey } from "../../config/localStorageKeys";
import useLocalStorage from "../../hooks/useLocalStorage";

export enum SignupEnum {
  WORKSPACE = "WORKSPACE",
  CONFIRMATION = "CONFIRMATION",
  PROFILE = "PROFILE",
}

interface IPros {
  type: SignupEnum;
  children: JSX.Element;
}

const SignupGuard: React.FC<IPros> = ({ type, children }) => {
  const { workspace, email, agreed, authorized, confirmed } = useSelector(
    (state: IRootState) => state.signup
  );
  const [signup, setSignup] = useLocalStorage(signupKey);

  const dispatch = useDispatch();

  switch (type) {
    case "WORKSPACE":
      return children;

    case "CONFIRMATION": {
      if (workspace && email && agreed && authorized) {
        return children;
      } else if (signup) {
        dispatch(createWorkspace(signup));
        return <Navigate to="/signup/email-sent" />;
      } else return <Navigate to="/signup/step1" />;
    }

    case "PROFILE":
      return confirmed ? children : <Navigate to="/signup/email-sent" />;

    default:
      return <Navigate to="/" />;
  }
};

export default SignupGuard;
