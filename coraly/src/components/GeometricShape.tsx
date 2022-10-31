import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { theme } from "../config/theme";

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
  inset: string[];
}

type MeshShape = Pick<Mesh, "columns" | "inset" | "spacing">;

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
const MeshShape = styled(Box)<MeshShape>(({ columns, inset, spacing }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${columns}, min-content)`,
  position: "absolute",
  zIndex: -1,

  [theme.breakpoints.down("md")]: {
    gap: `calc(0.53*${spacing})`,
    inset: inset.map((e, i) => (i === 0 ? `calc(1.4*${e})` : e)).join(" "),
  },

  [theme.breakpoints.up("md")]: {
    gap: `calc(0.7*${spacing})`,
    inset: inset.map((e, i) => (i === 0 ? `calc(1.3*${e})` : e)).join(" "),
  },

  [theme.breakpoints.up("xl")]: {
    gap: spacing,
    inset: inset.join(" "),
  },
}));

const getMesh: React.FC<Mesh> = (data) => {
  const { columns, spacing, inset, ...rest } = data;

  return (
    <MeshShape columns={columns} spacing={spacing} inset={inset}>
      {Array(rest.total)
        .fill(0)
        .map((_, index) => (
          <CircleShape
            sx={{
              position: "relative",
            }}
            inset="auto"
            key={index}
            color={rest.color}
            aspectRatio="1/1"
            width={rest.circleWidth}
            radius="50%"
          />
        ))}
    </MeshShape>
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
