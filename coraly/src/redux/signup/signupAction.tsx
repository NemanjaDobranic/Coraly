import { IWorkspaceForm } from "../../pages/signup/WorkspaceForm";
import { STEP_ONE, STEP_TWO, CONFIRMATION } from "./signupType";

export const createWorkspace = (workspaceForm: IWorkspaceForm) => {
  return {
    type: STEP_ONE,
    payload: workspaceForm,
  };
};
