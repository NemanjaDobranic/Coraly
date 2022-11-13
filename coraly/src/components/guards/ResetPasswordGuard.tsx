import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { IRootState } from "../../redux/rootReducer";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux";
import { resetPasswordKey } from "../../config/localStorageKeys";
import useLocalStorage from "../../hooks/useLocalStorage";
import { IResetPasswordState } from "../../redux/reset-password/resetPasswordReducer";
import { confirmPasswordEmail } from "../../redux";

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
  const [passwordStorage, setPasswordStorage] =
    useLocalStorage(resetPasswordKey);
  const dispatch = useDispatch();

  useEffect(() => {
    if (passwordStorage) {
      if (passwordStorage.email) {
        dispatch(resetPassword(passwordStorage.email));
      }
      if (passwordStorage.received) {
        dispatch(confirmPasswordEmail(passwordStorage.received));
      }
    }
  }, [passwordStorage]);

  switch (type) {
    case "RESET_PASSWORD":
      setPasswordStorage(null);
      return children;

    case "RECEIVED_EMAIL": {
      if (received || passwordStorage) {
        return <Navigate to="/reset-password/confirmation" />;
      }

      if (email || passwordStorage) {
        return children;
      } else return <Navigate to="/reset-password" />;
    }

    case "CONFIRM_PASSWORD":
      return received || passwordStorage ? (
        children
      ) : (
        <Navigate to="/reset-password/email-sent" />
      );

    default:
      return <Navigate to="/" />;
  }
};

export default ResetPasswordGuard;
