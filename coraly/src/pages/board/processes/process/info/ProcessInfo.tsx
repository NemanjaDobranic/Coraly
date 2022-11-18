import * as React from "react";
import Drawer from "@mui/material/Drawer";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { theme } from "../../../../../config/theme";

const drawerWidth = "31%";

const InfoDrawer = styled(Drawer)({
  display: "flex",
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    [theme.breakpoints.down("lg")]: {
      position: "absolute",
      top: 0,
    },
    position: "fixed",
    top: "150px",
  },
});

const ProcessInfo = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => handleDrawerOpen, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setTimeout(() => navigate("../"), 200);
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <InfoDrawer
        variant="persistent"
        anchor="right"
        open={open}
        closeAfterTransition={true}
      >
        Meow
      </InfoDrawer>
    </ClickAwayListener>
  );
};

export default ProcessInfo;
