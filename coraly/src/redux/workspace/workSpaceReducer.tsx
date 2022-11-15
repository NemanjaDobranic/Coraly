import { userKey } from "../../config/localStorageKeys";
import { SET_PROCESSES, SET_WORKSPACE } from "./workSpaceType";

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
  type: typeof SET_WORKSPACE | typeof SET_PROCESSES;
  payload?: IWorkSpace | IProcess[];
}

export interface IWorkSpaceState {
  user: IUser | undefined;
  workspace: IWorkSpace | undefined;
  processes: IProcess[] | undefined;
}

const initialState: IWorkSpaceState = {
  user: undefined,
  workspace: undefined,
  processes: undefined,
};

const workSpaceReducer: (
  state: IWorkSpaceState | undefined,
  action: IWorkSpaceAction
) => IWorkSpaceState = (
  state: IWorkSpaceState = initialState,
  action: IWorkSpaceAction
) => {
  switch (action.type) {
    case SET_WORKSPACE:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem(userKey) as string),
        workspace: action.payload as IWorkSpace,
      };
    case SET_PROCESSES:
      const processes = action.payload as IProcess[];
      return { ...state, processes:processes  };
    default:
      return state;
  }
};

export default workSpaceReducer;
