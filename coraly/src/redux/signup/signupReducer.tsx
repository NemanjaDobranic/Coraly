import { signupKey } from "../../config/localStorageKeys";
import { IWorkspaceForm } from "../../pages/signup/WorkspaceForm";
import { STEP_ONE, STEP_TWO, CONFIRMATION } from "./signupType";

export interface ISignupState {
  workspace: string;
  email: string;
  agreed: boolean;
  authorized: boolean;
  confirmed: boolean;
}

interface ISignupAction {
  type: typeof STEP_ONE | typeof CONFIRMATION | typeof STEP_TWO;
  payload?: IWorkspaceForm | boolean;
}

const initialState: ISignupState = {
  workspace: "",
  email: "",
  agreed: false,
  authorized: false,
  confirmed: false,
};

const signupReducer: (
  state: ISignupState | undefined,
  action: ISignupAction
) => ISignupState = (
  state: ISignupState = initialState,
  action: ISignupAction
) => {
  switch (action.type) {
    case STEP_ONE: {
      const newState = {
        ...state,
        ...(action.payload as IWorkspaceForm),
      };
      localStorage.setItem(signupKey, JSON.stringify(newState));
      return newState;
    }
    case CONFIRMATION: {
      const newState = {
        ...state,
        confirmed: action.payload as boolean,
      };
      localStorage.setItem(signupKey, JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default signupReducer;
