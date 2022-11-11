import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import { ISignupState } from "./signup/signupType";

export interface IRootState {
  signup: ISignupState;
}

const rootReducer = combineReducers<IRootState>({
  signup: signupReducer,
});

export default rootReducer;
