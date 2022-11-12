import React, { useState, useEffect } from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button, Link } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { theme } from "../../config/theme";
import CoralyLink from "../../components/CoralyLink";
import validate from "../../helpers/functions/validate";
import Fade from "@mui/material/Fade";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { createWorkspace } from "../../redux";
import { useNavigate } from "react-router";
import { cookiePolicy, privacyPolicy, terms } from "../../config/links";

export interface IWorkspaceForm {
  workspace: string;
  email: string;
  agreed: boolean;
  authorized: boolean;
}

const WorkspaceForm: React.FC = () => {
  const initialValues = {
    workspace: "",
    email: "",
    agreed: false,
    authorized: false,
  };
  const [formValues, setFormValues] = useState<IWorkspaceForm>(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<IWorkspaceForm>>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(createWorkspace(formValues));
      navigate("/signup/email-sent");
    }
  }, [formErrors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    let validationResult;

    if (type !== "checkbox") {
      setFormValues({ ...formValues, [name]: value });

      validationResult = validate({ [name]: value })[
        name as keyof IWorkspaceForm
      ];
    } else {
      setFormValues({ ...formValues, [name]: checked });
      validationResult = validate({ [name]: checked })[
        name as keyof IWorkspaceForm
      ];
    }

    validationResult !== undefined
      ? setFormErrors({ ...formErrors, ...{ [name]: validationResult } })
      : delete formErrors[name as keyof IWorkspaceForm];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <GetStarted>
      <Typography variant="h4" color={theme.palette.grey[900]} marginBottom={1}>
        Create your workspace
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[700]}
        marginBottom={6.25}
      >
        Coraly is the tool to manage your work processes form <br /> the same
        place
      </Typography>

      <form noValidate={true} onSubmit={handleSubmit}>
        <TextField
          label="Workspace Name"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ marginBottom: "24px" }}
          name="workspace"
          value={formValues.workspace}
          onChange={handleChange}
          error={!!formErrors.workspace}
          helperText={
            <Fade in={!!formErrors.workspace}>
              {<span>{formErrors.workspace}</span>}
            </Fade>
          }
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          sx={{ marginBottom: "16px" }}
          name="email"
          value={formValues.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={
            <Fade in={!!formErrors.email}>
              {<span>{formErrors.email}</span>}
            </Fade>
          }
        />

        <FormControl>
          <FormControlLabel
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(2, max-content)`,
              marginBottom: "16px",
            }}
            control={
              <Checkbox
                checked={formValues.agreed}
                name="agreed"
                onChange={handleChange}
              />
            }
            label={
              <Typography variant="body1">
                Agree with{" "}
                <Link href={terms} target="_blank">
                  Terms and Conditions
                </Link>
                ,&nbsp;
                <Link href={privacyPolicy} target="_blank">
                  Privacy Policy
                </Link>{" "}
                and <br />
                <Link href={cookiePolicy} target="_blank">
                  {" "}
                  Cookie Policy
                </Link>
              </Typography>
            }
          />
          {formErrors.agreed && (
            <Fade in>
              <FormHelperText>This field is requied!</FormHelperText>
            </Fade>
          )}
        </FormControl>

        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                name="authorized"
                checked={formValues.authorized}
                onChange={handleChange}
              />
            }
            label="I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail."
            sx={{
              marginBottom: "32px",
            }}
          />
          {formErrors.authorized && (
            <Fade in>
              <FormHelperText>This field is requied!</FormHelperText>
            </Fade>
          )}
        </FormControl>

        <Button
          variant="contained"
          sx={{ marginBottom: "2rem" }}
          color="secondary"
          type="submit"
          fullWidth
        >
          <Typography variant="button">Create now the account</Typography>
        </Button>

        <Typography variant="body1">
          Do you have an account? <CoralyLink to="/login">Sign in</CoralyLink>
        </Typography>
      </form>
    </GetStarted>
  );
};

export default WorkspaceForm;
