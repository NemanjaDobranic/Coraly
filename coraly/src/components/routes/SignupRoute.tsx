import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { IRootState } from "../../redux/rootReducer";

export enum SignupEnum {
  STEP_ONE = "STEP_ONE",
  CONFIRMATION = "CONFIRMATION",
  STEP_TWO = "STEP_TWO",
}

interface IPros {
  type: SignupEnum;
  children: JSX.Element;
}

const SignupRoute: React.FC<IPros> = ({ type, children }) => {
  const { workspace, email, agreed, authorized, confirmed } = useSelector(
    (state: IRootState) => state.signup
  );

  switch (type) {
    case "STEP_ONE":
      return children;

    case "CONFIRMATION":
      return workspace && email && agreed && authorized ? (
        children
      ) : (
        <Navigate to="/signup/step1" />
      );

    case "STEP_TWO":
      return confirmed ? children : <Navigate to="/signup/email-sent" />;

    default:
      return <Navigate to="/" />;
  }
};

export default SignupRoute;
