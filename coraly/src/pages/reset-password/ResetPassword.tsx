import React, { useState, useEffect } from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";
import CoralyLink from "../../components/CoralyLink";
import Fade from "@mui/material/Fade";
import validate from "../../helpers/functions/validate";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux";
import { useNavigate } from "react-router";

interface IResetPassword {
  email: string;
}

const ResetPassword: React.FC = () => {
  const initialValues = { email: "" };
  const [form, setForm] = useState<IResetPassword>(initialValues);
  const [formError, setFormError] = useState<Partial<IResetPassword>>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      dispatch(resetPassword(form.email));
      navigate("/reset-password/email-sent");
    }
  }, [form.email,isSubmit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ email: value });
    const validationResult = validate({ [name]: value })[
      name as keyof IResetPassword
    ];

    validationResult !== undefined
      ? setFormError({ [name]: validationResult })
      : delete formError.email;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(validate({ email: form.email }));
    setIsSubmit(true);
  };

  return (
    <GetStarted>
      <Typography variant="h4" color={theme.palette.grey[900]} marginBottom={1}>
        Do you forgot your password?
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[700]}
        marginBottom={6.25}
      >
        Insert your email and we will send you a link in
        <br /> your email box to reset your password.
      </Typography>

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          sx={{ marginBottom: "32px" }}
          name="email"
          value={form.email}
          onChange={handleChange}
          error={!!formError.email}
          helperText={
            <Fade in={!!formError.email}>{<span>{formError.email}</span>}</Fade>
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

        <Typography variant="body1">
          Go back to <CoralyLink to="/login">Login</CoralyLink>
        </Typography>
      </form>
    </GetStarted>
  );
};

export default ResetPassword;
