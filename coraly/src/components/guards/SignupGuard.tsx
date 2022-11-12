import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { IRootState } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import { createWorkspace } from "../../redux";
import { signupKey } from "../../config/localStorageKeys";
import useLocalStorage from "../../hooks/useLocalStorage";
import NotFound from "../../pages/NotFound";
import { confirmSignupEmail } from "../../redux";

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
  const [signup, setSignupStorage] = useLocalStorage(signupKey);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signup) {
      dispatch(createWorkspace(signup));
      if (signup.confirmed) dispatch(confirmSignupEmail(signup.confirmed));
    }
  }, [signup]);

  switch (type) {
    case "WORKSPACE":
      setSignupStorage(null);
      return children;

    case "CONFIRMATION": {
      if (signup || confirmed) {
        return <Navigate to="/signup/step2" />;
      }

      if ((workspace && email && agreed && authorized) || signup) {
        return children;
      } else return <Navigate to="/signup/step1" />;
    }

    case "PROFILE":
      if (confirmed || signup) {
        return children;
      } else return <Navigate to="/signup/email-sent" />;
    default:
      return <NotFound />;
  }
};

export default SignupGuard;
