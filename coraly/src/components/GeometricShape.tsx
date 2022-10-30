import { styled } from "@mui/material/styles";
import { Grid, SvgIcon } from "@mui/material";
import React from "react";

interface Props {
  type: string;
  data: object;
}

interface Circle {
  width: string;
  aspectRatio: string;
  inset: string;
  color: string;
  radius: string;
}

interface Ellipse {
  width: string;
  aspectRatio: string;
  height: string;
  inset: string;
  color: string;
  radius: string;
  angle?: string;
}

interface Triangle {
  width: string;
  height: string;
  inset: string;
  fill: string;
  angle?: string;
}

interface Mesh {
  circleWidth: string;
  color: string;
  total: number;
  columns: number;
  spacing: number;
}

const CircleShape = styled("div")<Circle>(
  ({ width, color, inset, aspectRatio, radius }) => ({
    position: "absolute",
    width: width,
    aspectRatio: aspectRatio,
    background: color,
    inset: inset,
    borderRadius: radius,
  })
);

const EllipseShape = styled("div")<Ellipse>(
  ({ width, height, color, inset, aspectRatio, radius, angle }) => ({
    position: "absolute",
    width: width,
    height: height,
    background: color,
    aspectRatio: aspectRatio,
    inset: inset,
    borderRadius: radius,
    transform: `rotate(${angle})`,
  })
);

const TriangleShape = styled(SvgIcon)<Triangle>(
  ({ width, height, inset, fill, angle }) => ({
    position: "absolute",
    transform: `rotate(${angle})`,
    width: width,
    height: height,
    inset: inset,
    "& path": {
      strokeWidth: 20,
      stroke: fill,
      fill: fill,
      strokeLinejoin: "round",
      strokeLinecap: "round",
    },
  })
);

const getMesh: React.FC<Mesh> = (data) => {
  console.log(data.color);
  return (
    <Grid container columns={data.columns} spacing="5px" >
      {Array(data.total)
        .fill(0)
        .map((_, index) => {
          return (
            <Grid item key={index} xs={1}>
              <CircleShape
                sx={{
                  position: "relative",
                }}
                inset="auto"
                key={index}
                color={"RED"}
                aspectRatio="1/1"
                width={data.circleWidth}
                radius="50%"
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

const GeometricShape: React.FC<Props> = (props) => {
  switch (props.type) {
    case "circle":
      return <CircleShape {...(props.data as Circle)}></CircleShape>;
    case "ellipse":
      return <EllipseShape {...(props.data as Ellipse)}></EllipseShape>;
    case "triangle":
      return (
        <TriangleShape {...(props.data as Triangle)} viewBox="0 0 100 100">
          <path d="M 50,10 90,90 10,90 z" />
        </TriangleShape>
      );
    case "mesh":
      return getMesh(props.data as Mesh);
    default:
      return <></>;
  }
};

export default GeometricShape;
