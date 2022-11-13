import React, { useState, useEffect } from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";
import Fade from "@mui/material/Fade";
import validate from "../../helpers/functions/validate";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/rootReducer";
import useApi, { HttpMethods } from "../../hooks/useApi";
import CoralyAlert, { ICoralyAlert } from "../../components/CoralyAlert";
import { useNavigate } from "react-router-dom";

interface IProfile {
  name: string;
  surname: string;
  password: string;
  repeatPassword: string;
}

function Profile() {
  const initialValues = {
    name: "",
    surname: "",
    password: "",
    repeatPassword: "",
  };

  const [formValues, setFormValues] = useState<IProfile>(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<IProfile>>(
    {} as IProfile
  );
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { workspace, email } = useSelector((state: IRootState) => state.signup);
  const [alert, setAlert] = useState<ICoralyAlert>({
    color: undefined,
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const [{ loading, response, error }, executeApiCall] = useApi({
    path: `/users`,
    options: {
      method: HttpMethods.POST,
      body: JSON.stringify({
        name: formValues.name,
        surname: formValues.surname,
        email: email,
        password: formValues.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  });

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      executeApiCall();
    }
  }, [formErrors]);

  useEffect(() => {
    if (response) {
      const user = response.user;
      if (user) {
        const userId = user.id;
        executeApiCall("/workspaces", {
          method: HttpMethods.POST,
          body: JSON.stringify({
            name: workspace,
            userId: userId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        return;
      }

      setAlert({
        color: "success",
        message: "Workspace and profile are successfully created",
      });
      setShowAlert(true);

      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }

    if (error) {
      console.log(error);
      setAlert({ color: "error", message: error.message });
      setShowAlert(true);
    }
  }, [response, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    const validationResult = validate({ ...formValues, [name]: value })[
      name as keyof IProfile
    ];

    validationResult !== undefined
      ? setFormErrors({ ...formErrors, ...{ [name]: validationResult } })
      : delete formErrors[name as keyof IProfile];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <GetStarted>
      <Typography variant="h4" color={theme.palette.grey[900]} marginBottom={1}>
        Complete your profile
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[700]}
        marginBottom={6.25}
      >
        Insert all your info to proceed with your workspace
      </Typography>

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          sx={{ marginBottom: "24px", width: "48%" }}
          name="name"
          value={formValues.name}
          onChange={handleChange}
          error={!!formErrors.name}
          helperText={
            <Fade in={!!formErrors.name}>{<span>{formErrors.name}</span>}</Fade>
          }
        />
        <TextField
          label="Surname"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ marginBottom: "24px", width: "48%", float: "right" }}
          name="surname"
          value={formValues.surname}
          onChange={handleChange}
          error={!!formErrors.surname}
          helperText={
            <Fade in={!!formErrors.surname}>
              {<span>{formErrors.surname}</span>}
            </Fade>
          }
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "16px" }}
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
          label="Repeat Password"
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
          variant="contained"
          sx={{ marginBottom: "2rem" }}
          color="secondary"
          type="submit"
          fullWidth
        >
          <Typography variant="button">Complete now</Typography>
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

export default Profile;
