import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import GeometricShape from "../components/GeometricShape";
import useGetStarted, { PageConfig } from "../hooks/useGetStarted";
import { theme } from "../config/theme";
import { useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

type Props = {
  children?: React.ReactNode;
};

interface Panel {
  backgroundColor: string;
  width: string;
}

const Root = styled("div")({
  display: "flex",
  gap: "8px",
  height: "100%",
  "& :first-of-type": {
    flex: 1,
  },
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
});

const PanelDiv = styled("div")<Panel>(({ backgroundColor, width }) => ({
  marginLeft: "auto",
  overflow: "hidden",
  position: "relative",
  backgroundColor: backgroundColor,
  zIndex: "-2",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: "100vh",
  },
  [theme.breakpoints.up("md")]: {
    width: width,
    height: "auto",
  },
}));

const GetStarted: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const variants: PageConfig[] = useGetStarted();

  const index = variants.findIndex((variant) =>
    location.pathname.includes(variant.path)
  );

  const { geometricShapes, backgroundColor, width, heading } =
    index < 0 ? variants[0] : variants[index];

  return (
    <Root>
      <Grid container alignContent="flex-start" padding="7%" gap="5vw">
        <Grid item xs={12}>
          <Box component="img" alt="logo" src={Logo}></Box>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
      <PanelDiv backgroundColor={backgroundColor} width={width}>
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
      </PanelDiv>
    </Root>
  );
};

export default GetStarted;
