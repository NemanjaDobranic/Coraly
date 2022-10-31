import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import GeometricShape from "../components/GeometricShape";
import useGetStarted from "../hooks/useGetStarted";
import { theme } from "../config/theme";
import { useLocation } from "react-router-dom";

interface Root {
  backgroundColor: string;
  width: string;
}

const Root = styled("div")<Root>(({ backgroundColor, width }) => ({
  height: "100vh",
  marginLeft: "auto",
  overflow: "hidden",
  position: "relative",
  backgroundColor: backgroundColor,
  zIndex: "-2",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: width,
  },
}));

const GetStarted: React.FC = () => {
  const location = useLocation();
  const variant = useGetStarted().find(
    (variant) => variant.path === location.pathname
  );

  const { geometricShapes, backgroundColor, width, heading } = variant
    ? variant
    : useGetStarted()[0];

  return (
    <Root backgroundColor={backgroundColor} width={width}>
      {geometricShapes.map((shape, index) => (
        <GeometricShape key={index} {...shape} />
      ))}
      <Typography
        variant="h1"
        color={heading.color}
        zIndex="1"
        sx={{ position: "relative", inset: heading.inset }}
      >
        Get started with Coraly <br />
        now and improve your
        <br /> workflow
      </Typography>
    </Root>
  );
};

export default GetStarted;
