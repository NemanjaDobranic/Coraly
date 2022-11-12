import React from "react";
import { Link } from "@mui/material";
import { Link as ReactLink, To } from "react-router-dom";

interface Props {
  to: To;
  children: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const CoralyLink: React.FC<Props> = ({ to, children, target }) => {
  return (
    <ReactLink to={to} target={target} style={{ textDecoration: "none" }}>
      <Link component="span">{children}</Link>
    </ReactLink>
  );
};

export default CoralyLink;
