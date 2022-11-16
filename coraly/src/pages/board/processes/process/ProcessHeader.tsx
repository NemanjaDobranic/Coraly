import { Box, Button, Typography } from "@mui/material";
import { amber, deepOrange, yellow } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import React from "react";
import { ArrowDownRoundedIcon, PhaseIcon } from "../../../../assets/images";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { theme } from "../../../../config/theme";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import ProcessToolbar from "./ProcessToolbar";

const Root = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  alignItems: "center",
  padding: theme.spacing(2),
});

const Bubble = styled(Box)<{ color: string; background: string }>(
  ({ color, background }) => {
    return {
      padding: theme.spacing(0.25),
      borderRadius: theme.spacing(0.5),
      aspectRatio: "1/1",
      width: theme.spacing(2.5),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 600,
      background: background,
      color: color,
    };
  }
);

function ProcessHeader() {
  return (
    <Root>
      <Box component="img" src={ArrowDownRoundedIcon}></Box>
      <Box component="img" src={PhaseIcon}></Box>
      <Typography
        variant="body1"
        color={theme.palette.grey.A100}
        fontWeight={600}
      >
        New Contract
      </Typography>
      <Box
        sx={{
          color: theme.palette.actionSecondary.main,
          fontWeight: 600,
          background: theme.palette.grey[200],
          padding: `${theme.spacing(0.25)} ${theme.spacing(0.5)}`,
          borderRadius: theme.spacing(0.5),
        }}
      >
        8 Schede
      </Box>

      {[
        { color: deepOrange[600], background: deepOrange[50], value: 1 },
        { color: amber[600], background: yellow[50], value: 2 },
      ].map(({ color, background, value }, index) => (
        <Bubble key={index} color={color} background={background}>
          {value}
        </Bubble>
      ))}

      <AddCircleOutlineRoundedIcon sx={{ color: theme.palette.primary.main }} />
      <MoreHorizIcon sx={{ color: theme.palette.grey[500] }} />
    </Root>
  );
}

export default ProcessHeader;
