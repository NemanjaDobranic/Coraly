import React from "react";
import { Link } from "@mui/material";
import { Link as ReactLink } from "react-router-dom";

interface Props {
  to: string;
  children: string;
}

const CoralyLink: React.FC<Props> = ({ to, children }) => {
  return (
    <ReactLink to={to} style={{ textDecoration: "none" }}>
      <Link component="span">{children}</Link>
    </ReactLink>
  );
};

export default CoralyLink;
