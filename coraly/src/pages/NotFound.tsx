import React from "react";
import { styled } from "@mui/material/styles";
import GeometricShape from "../components/GeometricShape";
import { Typography } from "@mui/material";
import { theme } from "../config/theme";

const Root = styled("div")({
  position: "relative",
  backgroundColor: "transparent",
  margin: "15% 32%",
});

const NotFoundCode = styled(Typography)({
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "62px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "84px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "118px",
  },
  "& span": {
    display: "inline-block",
    position: "relative",
    top: "1vw",
  },
});

const NotFound: React.FC = () => {
  return (
    <Root>
      <GeometricShape
        type={"ellipse"}
        data={{
          width: "30%",
          aspectRatio: "3/1.9",
          inset: "-60% auto auto 3%",
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
      <GeometricShape
        type={"ellipse"}
        data={{
          width: "26%",
          aspectRatio: "1/1",
          inset: "0 5% auto auto",
          color:
            "linear-gradient(134.55deg, rgba(252, 159, 182, 0.2) 5.97%, rgba(255, 255, 255, 0) 75%)",
          radius: "50%/100%",
          angle: "135deg",
        }}
      />
    </Root>
  );
};

export default NotFound;
