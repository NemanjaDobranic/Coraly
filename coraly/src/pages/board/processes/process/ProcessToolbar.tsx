import {
  styled,
  Box,
  Toolbar,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import {
  WebLayoutLeftIcon,
  BagIcon,
  FileExportIcon,
  FileImportIcon,
  FilterIcon,
  ListFormatIcon,
  ObjectGroupIcon,
  OrdersIcon,
  ResearchIcon,
  SettingIcon,
  VerticalResizeIcon,
  WebLayoutCenterIcon,
  ColorPalette,
  ArrowDownRoundedIcon,
} from "../../../../assets/images/index";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { theme } from "../../../../config/theme";
import { deepPurple, green } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router";

const Group = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(2),
});

interface ToolProps {
  background?: string;
  borderRadius?: string;
  padding?: string;
  iconBackground?: string;
  iconPadding?: string;
}

const Tool = styled("div")<ToolProps>(
  ({
    iconBackground = "transparent",
    background = "transparent",
    padding = "",
    borderRadius = "",
    iconPadding = "",
  }) => {
    return {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      columnGap: theme.spacing(1),
      padding: padding,
      alignItems: "center",
      background: background,
      borderRadius: borderRadius,
      cursor: "pointer",
      "& img:first-of-type": {
        background: iconBackground,
        borderRadius: theme.spacing(0.5),
        padding: iconPadding,
      },
    };
  }
);

const Wrapper = styled(Toolbar)({
  flexWrap: "wrap",
  gap: theme.spacing(2),
  background: theme.palette.common.white,
  justifyContent: "space-between",
  borderBottom: theme.spacing(0.125) + " solid " + theme.palette.grey[100],
  padding: [
    theme.spacing(1.75),
    theme.spacing(3),
    theme.spacing(2.75),
    theme.spacing(3),
  ],
  "&.MuiToolbar-root": {
    minHeight: 0,
    height: "fit-content",
  },
});

const ProcessToolbar: React.FC<{ openInfo: () => void }> = ({ openInfo }) => {
  const icons = [
    {
      id: 1,
      icon: BagIcon,
    },
    {
      id: 2,
      icon: ResearchIcon,
    },
    {
      id: 3,
      icon: FileImportIcon,
    },
    {
      id: 4,
      icon: FileExportIcon,
    },
    {
      id: 5,
      icon: SettingIcon,
    },
  ];
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Group>
        <Tool
          iconBackground={theme.palette.grey.A200}
          iconPadding={theme.spacing(0.7)}
        >
          <Box component="img" src={WebLayoutLeftIcon}></Box>
          <Typography>Views</Typography>
        </Tool>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderWidth: theme.spacing(0.1) }}
        />

        <Tool
          iconBackground={theme.palette.grey.A200}
          iconPadding={theme.spacing(0.7)}
        >
          <Box component="img" src={ListFormatIcon}></Box>
          <Typography>Views</Typography>
          <Box component="img" src={ArrowDownRoundedIcon}></Box>
        </Tool>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderWidth: theme.spacing(0.1) }}
        />

        <Tool
          background={green[50]}
          borderRadius={theme.spacing(0.5)}
          padding={`0px ${theme.spacing(0.7)}`}
        >
          <Box component="img" src={WebLayoutCenterIcon}></Box>
          <Typography color={theme.palette.grey[800]}>Columns</Typography>
        </Tool>

        <Tool>
          <Box component="img" src={FilterIcon}></Box>
          <Typography>Filters</Typography>
        </Tool>

        <Tool
          background={deepPurple[50]}
          borderRadius={theme.spacing(0.5)}
          padding={`0px ${theme.spacing(0.7)}`}
        >
          <Box component="img" src={ObjectGroupIcon}></Box>
          <Typography component="span" color={theme.palette.grey[800]}>
            Grouped in :&nbsp;
            <Typography component="span" fontWeight={700}>
              Phases
            </Typography>
          </Typography>
        </Tool>

        <Tool>
          <Box component="img" src={OrdersIcon}></Box>
          <Typography>Orders</Typography>
        </Tool>

        <Tool>
          <Box component="img" src={ColorPalette}></Box>
          <Typography>Colors</Typography>
        </Tool>

        <Tool>
          <Box component="img" src={VerticalResizeIcon}></Box>
          <Typography>Height</Typography>
        </Tool>
      </Group>

      <Group>
        {icons.map(({ icon, id }) => (
          <Tool key={id}>
            <Box
              component="img"
              src={icon}
              onClick={id === 5 ? () => navigate("./settings") : () => {}}
            ></Box>
          </Tool>
        ))}

        <Button
          variant="contained"
          sx={{ padding: `${theme.spacing(0.75)} ${theme.spacing(1.5)}` }}
          onClick={() => openInfo()}
        >
          <AddCircleOutlineRoundedIcon />
          &nbsp;Add
        </Button>
      </Group>
    </Wrapper>
  );
};

export default ProcessToolbar;
