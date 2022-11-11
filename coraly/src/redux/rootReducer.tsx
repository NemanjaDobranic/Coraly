import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
});


export default rootReducer;