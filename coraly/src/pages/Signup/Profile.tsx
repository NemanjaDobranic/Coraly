import React, { useState, useEffect } from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";
import Fade from "@mui/material/Fade";
import validate from "../../helpers/functions/validate";

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

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

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
    </GetStarted>
  );
}

export default Profile;
