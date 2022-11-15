import { userKey } from "../../config/localStorageKeys";
import { SET_WORKSPACE } from "./workSpaceType";

export interface IUser {
  name: string;
  surname: string;
  email: string;
}

export interface IWorkSpace {
  id: number;
  name: string;
}

export interface IProcess {
  id: number;
  name: string;
  color: string;
  isPrivate?: boolean | undefined;
  icon: string;
}

interface IWorkSpaceAction {
  type: typeof SET_WORKSPACE;
  payload?: IWorkSpace;
}

export interface IWorkSpaceState {
  user: IUser | undefined;
  workspace: IWorkSpace | undefined;
}

const initialState: IWorkSpaceState = {
  user: undefined,
  workspace: undefined,
};

const workSpaceReducer: (
  state: IWorkSpaceState | undefined,
  action: IWorkSpaceAction
) => IWorkSpaceState = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKSPACE:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem(userKey) as string),
        workspace: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default workSpaceReducer;
