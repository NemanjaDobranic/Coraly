import React from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";

function ConfirmPassword() {
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

      <form>
        <TextField
          label="New password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "32px" }}
        />

        <TextField
          label="Confirm new password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "32px" }}
        />

        <Button variant="contained" sx={{ marginBottom: "2rem" }} fullWidth>
          <Typography variant="button">Reset Password</Typography>
        </Button>
      </form>
    </GetStarted>
  );
}

export default ConfirmPassword;
