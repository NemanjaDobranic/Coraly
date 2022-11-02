import React from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";
import CoralyLink from "../../components/CoralyLink";

const ResetPassword:React.FC = () => {
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

      <form>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          sx={{ marginBottom: "32px" }}
        />

        <Button variant="contained" sx={{ marginBottom: "2rem" }} fullWidth>
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
