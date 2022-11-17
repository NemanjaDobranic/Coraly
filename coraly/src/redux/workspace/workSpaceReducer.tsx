import { userKey } from "../../config/localStorageKeys";
import {
  SET_ACTIVE_PROCESS,
  SET_PROCESSES,
  SET_WORKSPACE,
} from "./workSpaceType";

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
  type: typeof SET_WORKSPACE | typeof SET_PROCESSES | typeof SET_ACTIVE_PROCESS;
  payload?: IWorkSpace | IProcess[];
}

export interface IWorkSpaceState {
  user: IUser | undefined;
  workspace: IWorkSpace | undefined;
  processes: IProcess[] | undefined;
  activeProcess: IProcess | undefined;
}

const initialState: IWorkSpaceState = {
  user: undefined,
  workspace: undefined,
  processes: undefined,
  activeProcess: undefined
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
      return { ...state, processes: processes };

    case SET_ACTIVE_PROCESS:
      const process = action.payload as IProcess;
      return { ...state, activeProcess: process };
    default:
      return state;
  }
};

export default workSpaceReducer;
