import {
  RESET_PASSWORD,
  RECEIVED_EMAIL,
  CONFIRM_PASSWORD,
} from "./resetPasswordType";

export const resetPassword = (email: string) => {
  return {
    type: RESET_PASSWORD,
    payload: email,
  };
};

export const confirmEmail = (received: boolean) => {
  return {
    type: RECEIVED_EMAIL,
    payload: received,
  };
};
