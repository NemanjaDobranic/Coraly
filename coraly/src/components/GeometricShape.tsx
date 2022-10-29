import { styled } from "@mui/material/styles";
import React from "react";

interface Props {
  width: string;
  height: string;
  top: string;
  left: string;
  background: string;
  radius?: string;
  angle?: string;
}

const Shape = styled("div")<Props>(
  ({ width, height, background, left, top, radius, angle }) => ({
    position: "absolute",
    width: width,
    height: height,
    background: background,
    left: left,
    top: top,
    borderRadius: radius,
    transform: `rotate(${angle})`,
  })
);

const GeometricShape: React.FC<Props> = (props) => {
  return <Shape {...props}></Shape>;
};

export default GeometricShape;
