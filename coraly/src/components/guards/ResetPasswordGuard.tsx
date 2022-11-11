import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { IRootState } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux";
import { resetPasswordKey } from "../../config/localStorageKeys";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IResetPasswordState } from "../../redux/reset-password/resetPasswordReducer";

export enum ResetPasswordEnum {
  RESET_PASSWORD = "RESET_PASSWORD",
  RECEIVED_EMAIL = "RECEIVED_EMAIL",
  CONFIRM_PASSWORD = "CONFIRM_PASSWORD",
}

interface IPros {
  type: ResetPasswordEnum;
  children: JSX.Element;
}

const ResetPasswordGuard: React.FC<IPros> = ({ type, children }) => {
  const { email, received, confirmed } = useSelector(
    (state: IRootState) => state.resetPassword
  );
  const [passwordStorage] = useLocalStorage(resetPasswordKey);

  const dispatch = useDispatch();
  switch (type) {
    case "RESET_PASSWORD":
      return children;

    case "RECEIVED_EMAIL": {
      if (email) {
        return children;
      } else if (passwordStorage.email) {
        dispatch(resetPassword(passwordStorage.email));
        return <Navigate to="/reset-password/email-sent" />;
      } else return <Navigate to="/reset-password" />;
    }

    case "CONFIRM_PASSWORD":
      return received ? children : <Navigate to="/reset-password/email-sent" />;

    default:
      return <Navigate to="/" />;
  }
};

export default ResetPasswordGuard;
