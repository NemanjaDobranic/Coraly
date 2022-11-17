import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { theme } from "../../config/theme";
import { drawerIcons } from "./DrawerIcons";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { PaletteColor } from "@mui/material";
import Logo from "../../assets/images/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IUser, IWorkSpace } from "../../redux/workspace/workSpaceReducer";
import { RightArrowIcon } from "../../assets/images";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  background: theme.palette.actionSecondary.main,
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  background: theme.palette.actionSecondary.main,
  width: drawerWidth / 4,
});

const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1.25),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
});

interface AvatarProps {
  paint?: PaletteColor;
  margin?: string;
}

const Avatar = styled("div")<AvatarProps>(
  ({ paint = theme.palette.primary, margin = "0" }) => ({
    color: theme.palette.common.white,
    fontWeight: "bold",
    width: "40px",
    height: "40px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: paint.light,
    border: "1px solid " + paint.main,
    borderRadius: "8px",
    margin: margin,
  })
);

const Shortcut = styled("div")(() => ({
  width: "26px",
  height: "26px",
  color: theme.palette.grey[900],
  fontWeight: "600",
  transform: "perspective(26px) rotateX(10deg)",
  border: "1px solid " + theme.palette.grey[300],
  borderRadius: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.35)",
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: theme.palette.common.white,
  color: theme.palette.grey.A100,
  marginLeft: `calc(100% - ${drawerWidth / 4}px)`,
  width: `calc(100% - ${drawerWidth / 4}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  "& .MuiToolbar-root": {
    gap: "24px",
  },

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerList = styled(List)<{ open: boolean }>(({ open }) => {
  return {
    color: theme.palette.grey[100],
    "& .MuiButtonBase-root": {
      gap: open ? 10 : 0,
    },
  };
});

interface DrawerListIcon {
  activepage?: "true" | "false";
  open?: boolean;
}

const DrawerListIcon = styled(ListItemIcon)<DrawerListIcon>(
  ({ activepage = "false", open = false }) => ({
    color:
      activepage === "true"
        ? theme.palette.primary.main
        : theme.palette.grey[100],
    minWidth: 0,
    mr: open ? 3 : "auto",
    justifyContent: "center",
    "& :hover": {
      color: theme.palette.primary.main,
      "& .MuiListItemIcon-root": {
        color: theme.palette.primary.main,
      },
    },
  })
);

interface BoardProps {
  user: IUser;
  workspace: IWorkSpace;
}

const Board: React.FC<BoardProps> = ({ user, workspace }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activePage, setActivePage] = useState(
    location.pathname.substring(location.pathname.lastIndexOf("/"))
  );
  const [boardPath, setBoardPath] = useState<string[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (location.pathname.includes("/board")) {
      setBoardPath(() =>
        location.pathname.split("/board")[1].split("/").splice(1, 2)
      );
    }
  }, [location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const displayView = (relativePath: string) => {
    setActivePage(relativePath);
    navigate("/board" + relativePath);
  };

  const getBoardPath = () => {
    const length = boardPath.length;
    return boardPath.map((value, index) => (
      <Typography
        variant="h2"
        noWrap
        key={index}
        display="flex"
        alignItems="center"
        gap={theme.spacing(1)}
        fontSize={`${theme.spacing(2.5)} !important`}
        color={
          index !== length - 1
            ? theme.palette.grey[600]
            : theme.palette.grey.A100
        }
      >
        {value[0].toUpperCase() + value.substring(1)}
        {index !== length - 1 && (
          <Box component="img" src={RightArrowIcon}></Box>
        )}
      </Typography>
    ));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box
            component="div"
            display="flex"
            gap={theme.spacing(1)}
            alignItems="center"
          >
            {getBoardPath()}
          </Box>
          <NotificationsNoneOutlinedIcon
            style={{ color: theme.palette.grey[700], marginLeft: "auto" }}
          />
          <Shortcut>A</Shortcut>
          <Avatar paint={theme.palette.secondary}>
            {user.name[0] + user.surname[0]}
          </Avatar>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {!open ? (
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon style={{ color: theme.palette.grey[100] }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ color: theme.palette.grey[100] }} />
              ) : (
                <ChevronLeftIcon style={{ color: theme.palette.grey[100] }} />
              )}
            </IconButton>
          )}
        </DrawerHeader>
        <Avatar margin="20px auto 0 auto">
          {workspace.name[0].toUpperCase() + workspace.name[1].toUpperCase()}
        </Avatar>
        <DrawerList open={open}>
          {drawerIcons.map(({ id, icon, text, relativePath }) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => displayView(relativePath)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  padding: 1.5,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <DrawerListIcon
                  open={open}
                  activepage={activePage === relativePath ? "true" : "false"}
                >
                  {icon}
                </DrawerListIcon>
                <ListItemText
                  color="white"
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </DrawerList>
        <Box
          component="img"
          margin="auto auto 20px auto"
          alt="logo"
          width={30}
          height={26}
          src={Logo}
        ></Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          background: theme.palette.grey.A200,
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Board;
