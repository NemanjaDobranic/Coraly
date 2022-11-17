import { IProcess, IWorkSpace } from "./workSpaceReducer";
import {
  SET_ACTIVE_PROCESS,
  SET_PROCESSES,
  SET_WORKSPACE,
} from "./workSpaceType";

export const setWorkSpace = (workspace: IWorkSpace) => {
  return {
    type: SET_WORKSPACE,
    payload: workspace,
  };
};

export const setProcesses = (processes: IProcess[]) => {
  return {
    type: SET_PROCESSES,
    payload: processes,
  };
};

export const setActiveProcess = (process: IProcess | undefined) => {
  return {
    type: SET_ACTIVE_PROCESS,
    payload: process,
  };
};
