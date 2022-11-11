import { combineReducers } from "redux";
import resetPasswordReducer from "./reset-password/resetPasswordReducer";
import { IResetPasswordState } from "./reset-password/resetPasswordReducer";
import signupReducer from "./signup/signupReducer";
import { ISignupState } from "./signup/signupReducer";

export interface IRootState {
  signup: ISignupState;
  resetPassword: IResetPasswordState;
}

const rootReducer = combineReducers<IRootState>({
  signup: signupReducer,
  resetPassword: resetPasswordReducer,
});

export default rootReducer;
