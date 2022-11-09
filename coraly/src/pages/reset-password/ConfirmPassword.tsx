import React, { useState, useEffect } from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";
import validate from "../../helpers/functions/validate";
import Fade from "@mui/material/Fade";

interface IConfirmPassword {
  password: string;
  repeatPassword: string;
}

function ConfirmPassword() {
  const initialValues = { password: "", repeatPassword: "" };
  const [formValues, setFormValues] = useState<IConfirmPassword>(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<IConfirmPassword>>({});
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
    </GetStarted>
  );
}

export default ConfirmPassword;
