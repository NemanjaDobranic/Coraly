import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import GeometricShape from "../components/GeometricShape";
import useGetStarted from "../hooks/useGetStarted";

const useStyles = makeStyles((theme?: Theme) => ({
  h1: {
    position: "absolute",
    top: "320px",
    left: "171px",
  },
}));

const GetStarted: React.FC = () => {
  const classes = useStyles();
  const { geometricShapes } = useGetStarted()[0];

  return (
    <div>
      {geometricShapes.map((shape, index) => (
        <GeometricShape key={index} {...shape} />
      ))}

      <Typography
        variant="h1"
        color="grey.900"
        maxWidth="619px"
        className={classes.h1}
      >
        Get started with Coraly now and improve your workflow
      </Typography>
    </div>
  );
};

export default GetStarted;
