
import { STEP_ONE, STEP_TWO, CONFIRMATION, ISignupState, ISignupAction } from "./signupType";

const initialState: ISignupState = {
  workspace: "",
  email: "",
  agreed: false,
  authorized: false,
  confirmed: false,
};

const signupReducer = (state = initialState, action: ISignupAction) => {
  switch (action.type) {
    case STEP_ONE: {
      const newState = {
        ...state,
        ...action.payload,
      };
      localStorage.setItem("signup", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default signupReducer;
