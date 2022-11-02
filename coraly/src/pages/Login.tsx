import React from "react";
import GetStarted from "../layouts/GetStarted";
import { Typography, TextField } from "@mui/material";
import { theme } from "../config/theme";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid, Button } from "@mui/material";
import CoralyLink from "../components/CoralyLink";

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
          sx={{ marginBottom: "18px" }}
        />

        <Grid container alignItems="center" marginBottom={4.25}>
          <Grid item>
            <FormControlLabel
              control={<Checkbox TouchRippleProps={{ color: "green" }} />}
              label="Remember me"
            />
          </Grid>
          <Grid item>
            <CoralyLink to="/reset-password">Forgot password</CoralyLink>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{ marginBottom: "2rem" }}
          color="actionSecondary"
          fullWidth
        >
          <Typography variant="button">Login</Typography>
        </Button>

        <Typography variant="body1">
          Don’t you have an account? <CoralyLink to="/signup">Sign up now</CoralyLink>
        </Typography>
      </form>
    </GetStarted>
  );
};

export default Login;
