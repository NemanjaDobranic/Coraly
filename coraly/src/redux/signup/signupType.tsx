import { IWorkspaceForm } from "../../pages/signup/WorkspaceForm";

export interface ISignupState extends IWorkspaceForm {
  confirmed: boolean;
}
export interface ISignupAction {
  type: typeof STEP_ONE | typeof CONFIRMATION | typeof STEP_TWO;
  payload?: IWorkspaceForm | { confirmed: boolean };
}
export const STEP_ONE = "STEP_ONE";
export const CONFIRMATION = "CONFIRMATION";
export const STEP_TWO = "STEP_TWO";
