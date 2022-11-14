import { IWorkSpace } from "./workSpaceReducer";
import { SET_WORKSPACE } from "./workSpaceType";

export const setWorkSpace = (workspace: IWorkSpace) => {
  return {
    type: SET_WORKSPACE,
    payload: workspace,
  };
};
