import React from "react";
import GetStarted from "../../layouts/GetStarted";
import { Typography, TextField, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { theme } from "../../config/theme";
import CoralyLink from "../../components/CoralyLink";

const WorkspaceForm: React.FC = () => {
  return (
    <GetStarted>
      <Typography variant="h4" color={theme.palette.grey[900]} marginBottom={1}>
        Create your workspace
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[700]}
        marginBottom={6.25}
      >
        Coraly is the tool to manage your work processes form <br /> the same
        place
      </Typography>

      <form>
        <TextField
          label="Workspace Name"
          variant="outlined"
          type="text"
          fullWidth
          sx={{ marginBottom: "24px" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          sx={{ marginBottom: "16px" }}
        />

        <FormControlLabel
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(2, max-content)`,
            marginBottom: "16px",
          }}
          control={<Checkbox />}
          label={
            <Typography variant="body1">
              Agree wit <CoralyLink to="">Terms and Conditions</CoralyLink>,
              <CoralyLink to="">Privacy Policy</CoralyLink> and <br />
              <CoralyLink to=""> Cookie Policy</CoralyLink>
            </Typography>
          }
        />

        <FormControlLabel
          control={<Checkbox />}
          label="I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail."
          sx={{
            marginBottom: "32px",
          }}
        />

        <Button
          variant="contained"
          sx={{ marginBottom: "2rem" }}
          color="secondary"
          fullWidth
        >
          <Typography variant="button">Create now the account</Typography>
        </Button>

        <Typography variant="body1">
          Do you have an account? <CoralyLink to="/login">Sign in</CoralyLink>
        </Typography>
      </form>
    </GetStarted>
  );
};

export default WorkspaceForm;
