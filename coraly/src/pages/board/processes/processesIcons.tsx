import React from "react";
import Board from "../../../assets/images/board.svg";
import Cart from "../../../assets/images/cart.svg";
import { Box } from "@mui/material";

const processesIcons = [
  {
    name: "board",
    icon: (
      <Box component="img" alt="board" width={30} height={30} src={Board}></Box>
    ),
  },
  {
    name: "cart",
    icon: (
      <Box component="img" alt="cart" width={30} height={30} src={Cart}></Box>
    ),
  },
];

export default processesIcons;
