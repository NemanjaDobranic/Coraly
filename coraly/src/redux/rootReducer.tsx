import { combineReducers } from "redux";
import resetPasswordReducer from "./reset-password/resetPasswordReducer";
import { IResetPasswordState } from "./reset-password/resetPasswordReducer";
import signupReducer from "./signup/signupReducer";
import { ISignupState } from "./signup/signupReducer";
import workSpaceReducer, {
  IWorkSpaceState,
} from "./workspace/workSpaceReducer";

export interface IRootState {
  signup: ISignupState;
  resetPassword: IResetPasswordState;
  workSpace: IWorkSpaceState ;
}

const rootReducer = combineReducers<IRootState>({
  signup: signupReducer,
  resetPassword: resetPasswordReducer,
  workSpace: workSpaceReducer ,
});

export default rootReducer;
