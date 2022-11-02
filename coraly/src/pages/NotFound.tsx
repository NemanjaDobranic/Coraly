import React from "react";
import { styled } from "@mui/material/styles";
import GeometricShape from "../components/GeometricShape";
import { Typography } from "@mui/material";
import { theme } from "../config/theme";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Root = styled("div")({
  position: "relative",
  backgroundColor: "transparent",
  margin: "15% 32%",
});

const NotFoundCode = styled(Typography)({
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    fontSize: "42px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "42px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "65px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "86px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "122px",
  },
  "& span": {
    display: "inline-block",
    position: "relative",
    top: "1vw",
  },
});

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Root>
      <GeometricShape
        type={"ellipse"}
        data={{
          width: "30%",
          aspectRatio: "3/1.9",
          inset: "-20% auto auto 3%",
          color:
            "linear-gradient(134.55deg, rgba(252, 159, 182, 0.2) 5.97%, rgba(255, 255, 255, 0) 75%)",
          radius: "14px",
          angle: "0",
        }}
      />
      <NotFoundCode
        variant="h1"
        align="center"
        color="primary"
        fontWeight={900}
        letterSpacing={12}
      >
        4<span>0</span>4
      </NotFoundCode>
      <Grid container justifyContent="center" rowSpacing={2} marginTop="16%">
        <Grid item>
          <Typography variant="h4" color={theme.palette.grey.A100}>
            Page not found
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            color={theme.palette.grey[800]}
            textAlign="center"
          >
            The page you are trying to reach is not available. It may have been
            deleted or its URL
            <br /> was misspelled.
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            sx={{ marginX: "auto" }}
            color="actionSecondary"
          >
            <Typography variant="button">Go back</Typography>
          </Button>
        </Grid>
      </Grid>

      <GeometricShape
        type={"ellipse"}
        data={{
          width: "26%",
          aspectRatio: "1.05/1",
          inset: "0 5% auto auto",
          color:
            "linear-gradient(134.55deg, rgba(252, 159, 182, 0.2) 5.97%, rgba(255, 255, 255, 0) 75%)",
          radius: "38%",
          angle: "135deg",
        }}
      />
    </Root>
  );
};

export default NotFound;
