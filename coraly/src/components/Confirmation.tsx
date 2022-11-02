import React from "react";
import GetStarted from "../layouts/GetStarted";
import { Box, Typography } from "@mui/material";
import { theme } from "../config/theme";
import Done from "../assets/images/done.svg";

interface Props {
  header: React.ReactNode;
  body: React.ReactNode;
}

const Confirmation: React.FC<Props> = ({ header, body }) => {
  return (
    <GetStarted>
      <Typography variant="h4" color={theme.palette.grey[900]} marginBottom={1}>
        {header}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.grey[700]}
        marginBottom={7}
      >
        {body}
      </Typography>
      <Box
        component="img"
        alt="logo"
        src={Done}
        sx={{
          left: "-2.5%",
          position: "relative",
          [theme.breakpoints.up(0)]: {
            maxWidth: "34px",
          },
          [theme.breakpoints.up("md")]: {
            maxWidth: "54px",
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: "72px",
          },
          [theme.breakpoints.up("xl")]: {
            maxWidth: "100px",
          },
        }}
      ></Box>
    </GetStarted>
  );
};

export default Confirmation;
