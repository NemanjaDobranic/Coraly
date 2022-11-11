import React, { useEffect } from "react";
import GetStarted from "../layouts/GetStarted";
import { Box, Typography } from "@mui/material";
import { theme } from "../config/theme";
import Done from "../assets/images/done.svg";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { confirmSignupEmail } from "../redux";
import { confirmPasswordEmail } from "../redux";

export enum ConfirmationEnum {
  SIGNUP,
  RESET_PASSWORD,
}

interface Props {
  header: React.ReactNode;
  body: React.ReactNode;
  type: ConfirmationEnum;
}

const Confirmation: React.FC<Props> = ({ header, body, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (type === ConfirmationEnum.SIGNUP) {
        navigate("/signup/step2");
        dispatch(confirmSignupEmail(true));
      }
      if (type === ConfirmationEnum.RESET_PASSWORD) {
        navigate("/reset-password/confirmation");
        dispatch(confirmPasswordEmail(true));
      }
    }, 3000);
  }, []);

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
