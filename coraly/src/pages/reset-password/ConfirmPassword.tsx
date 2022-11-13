import React, { useState, useEffect } from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";
import validate from "../../helpers/functions/validate";
import Fade from "@mui/material/Fade";
import CoralyAlert, { ICoralyAlert } from "../../components/CoralyAlert";
import useApi, { HttpMethods } from "../../hooks/useApi";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/rootReducer";
import { useNavigate } from "react-router-dom";
import { resetPasswordKey } from "../../config/localStorageKeys";

interface IConfirmPassword {
  password: string;
  repeatPassword: string;
}

function ConfirmPassword() {
  const initialValues = { password: "", repeatPassword: "" };
  const [formValues, setFormValues] = useState<IConfirmPassword>(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<IConfirmPassword>>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [alert, setAlert] = useState<ICoralyAlert>({
    color: undefined,
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const { email } = useSelector((state: IRootState) => state.resetPassword);
  const [{ loading, response, error }, executeApiCall] = useApi({
    path: `/users?email=${email}`,
    options: {
      method: HttpMethods.GET,
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
  const [isPatched, setIsPatched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      executeApiCall();
    }
  }, [email]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const userId = response[0].id;
      executeApiCall(`/users/${userId}`, {
        method: HttpMethods.PATCH,
        body: JSON.stringify({
          password: formValues.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => setIsPatched(true));
    }
  }, [formErrors]);

  useEffect(() => {
    if (isPatched) {
      if (error) {
        console.log(error);
        setAlert({
          color: "error",
          message:
            error.message.length > 0 ? error.message : "An error has occured!",
        });
        setShowAlert(true);
        return;
      }

      if (response) {
        setAlert({
          color: "success",
          message: "Password successfully updated",
        });
        setShowAlert(true);

        setTimeout(() => {
          localStorage.removeItem(resetPasswordKey);
          navigate("/login");
        }, 2500);
      }
    }
  }, [isPatched]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    const validationResult = validate({ ...formValues, [name]: value })[
      name as keyof IConfirmPassword
    ];

    validationResult !== undefined
      ? setFormErrors({ ...formErrors, ...{ [name]: validationResult } })
      : delete formErrors[name as keyof IConfirmPassword];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <GetStarted>
      <Typography variant="h4" color={theme.palette.grey[900]} marginBottom={1}>
        Insert new password
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[700]}
        marginBottom={6.25}
      >
        Enter your new password to access the platform
      </Typography>

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          label="New password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "32px" }}
          name="password"
          value={formValues.password}
          onChange={handleChange}
          error={!!formErrors.password}
          helperText={
            <Fade in={!!formErrors.password}>
              {<span>{formErrors.password}</span>}
            </Fade>
          }
        />

        <TextField
          label="Confirm new password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "32px" }}
          name="repeatPassword"
          onChange={handleChange}
          error={!!formErrors.repeatPassword}
          helperText={
            <Fade in={!!formErrors.repeatPassword}>
              {<span>{formErrors.repeatPassword}</span>}
            </Fade>
          }
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ marginBottom: "2rem" }}
          fullWidth
        >
          <Typography variant="button">Reset Password</Typography>
        </Button>
      </form>

      {showAlert && (
        <CoralyAlert
          {...alert}
          changeVisibility={(isVisible) => setShowAlert(isVisible)}
        />
      )}
    </GetStarted>
  );
}

export default ConfirmPassword;
