import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CoralyProgress() {
  return (
    <Box sx={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
      <CircularProgress color="primary" />
    </Box>
  );
}
