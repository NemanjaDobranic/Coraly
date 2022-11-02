import React from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import { theme } from "../../config/theme";

function Profile() {
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

      <form>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          sx={{ marginBottom: "24px", width: "48%" }}
        />
        <TextField
          label="Surname"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ marginBottom: "24px", width: "48%", float: "right" }}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "16px" }}
        />

        <TextField
          label="Repeat Password"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: "32px" }}
        />

        <Button
          variant="contained"
          sx={{ marginBottom: "2rem" }}
          color="secondary"
          fullWidth
        >
          <Typography variant="button">Complete now</Typography>
        </Button>
      </form>
    </GetStarted>
  );
}

export default Profile;
