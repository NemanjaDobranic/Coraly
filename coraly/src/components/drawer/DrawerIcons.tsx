import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import StorageRounded from "@mui/icons-material/StorageRounded";
import SchemaIcon from "@mui/icons-material/Schema";
import Phase from "../../assets/images/phase.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const drawerIcons = [
  {
    id: 1,
    text: "Processi",
    icon: <GridViewIcon />,
    relativePath: "/processes",
  },
  {
    id: 2,
    text: "Team",
    icon: <PeopleAltIcon />,
    relativePath: "/team",
  },
  {
    id: 3,
    text: "Modelli",
    icon: <DescriptionOutlinedIcon />,
    relativePath: "/models",
  },
  {
    id: 4,
    text: "Database",
    icon: <StorageRounded />,
    relativePath: "/database",
  },
  {
    id: 5,
    text: "Macro Fasi",
    icon: <ArrowForwardIcon />,
    relativePath: "/macro-phases",
  },
  {
    id: 6,
    text: "Automazioni",
    icon: <SmartToyOutlinedIcon />,
    relativePath: "/automations",
  },
  {
    id: 7,
    text: "Venditori",
    icon: <SchemaIcon />,
    relativePath: "/sellers",
  },
  {
    id: 8,
    text: "Supporto",
    icon: <HelpOutlineIcon />,
    relativePath: "/support",
  },
  {
    id: 9,
    text: "Logout",
    icon: <ExitToAppIcon />,
    relativePath: "/logout",
  },
];
