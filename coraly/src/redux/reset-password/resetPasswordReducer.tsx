import { resetPasswordKey } from "../../config/localStorageKeys";
import {
  RESET_PASSWORD,
  CONFIRM_PASSWORD,
  RECEIVED_EMAIL,
} from "./resetPasswordType";

export interface IResetPasswordState {
  email: string;
  received: boolean;
  confirmed: boolean;
}

interface IResetPasswordAction {
  type: typeof RESET_PASSWORD | typeof CONFIRM_PASSWORD | typeof RECEIVED_EMAIL;
  payload?: string | boolean;
}

const initialState: IResetPasswordState = {
  email: "",
  received: false,
  confirmed: false,
};

const resetPasswordReducer: (
  state: IResetPasswordState | undefined,
  action: IResetPasswordAction
) => IResetPasswordState = (
  state: IResetPasswordState = initialState,
  action: IResetPasswordAction
) => {
  switch (action.type) {
    case RESET_PASSWORD: {
      const newState = {
        ...state,
        email: action.payload as string,
      };
      localStorage.setItem(resetPasswordKey, JSON.stringify(newState));
      return newState;
    }
    case RECEIVED_EMAIL: {
      const newState = {
        ...state,
        received: action.payload as boolean,
      };
      localStorage.setItem(resetPasswordKey, JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default resetPasswordReducer;
