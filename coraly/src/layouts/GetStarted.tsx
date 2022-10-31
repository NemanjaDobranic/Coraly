import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import GeometricShape from "../components/GeometricShape";
import useGetStarted from "../hooks/useGetStarted";

const useStyles = makeStyles((theme?: Theme) => ({
  root: {
    width: "50vw",
    height: "100vh",
    position: "relative",
  },
  h1: {
    position: "relative",
  },
}));

const GetStarted: React.FC = () => {
  const classes = useStyles();
  const { geometricShapes } = useGetStarted()[0];

  return (
    <div className={classes.root}>
      {geometricShapes.map((shape, index) => (
        <GeometricShape key={index} {...shape} />
      ))}

      <div></div>

      <Typography
        variant="h1"
        className={classes.h1}
        color="grey.900"
        zIndex="1"
        top="42%"
        left="20%"
      >
        Get started with Coraly <br />
        now and improve your
        <br /> workflow
      </Typography>
    </div>
  );
};

export default GetStarted;
