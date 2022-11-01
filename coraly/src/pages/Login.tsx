import React from "react";
import GetStarted from "../layouts/GetStarted";
import { Typography, TextField } from "@mui/material";
import { theme } from "../config/theme";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login: React.FC = () => {
  return (
    <GetStarted>
      <Typography variant="h4" color={theme.palette.grey[900]} marginBottom={1}>
        Log in
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[700]}
        marginBottom={6.25}
      >
        Thanks to come back on Coraly
      </Typography>
      <form>
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          sx={{ marginBottom: "24px" }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox TouchRippleProps={{ color: "green" }} />}
          label="Remember me"
        />
      </form>
    </GetStarted>
  );
};

export default Login;
