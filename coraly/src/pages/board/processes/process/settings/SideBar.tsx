import { Box, Divider, styled, SvgIcon, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../../../config/theme";
import {
  FormatListBulleted,
  SubdirectoryArrowRightRounded,
  ViewColumnOutlined,
  ViewKanbanOutlined,
  LabelOutlined,
  DescriptionOutlined,
  SmartToyOutlined,
  SyncAltOutlined,
  FileUploadOutlined,
  PeopleAltOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const icons = [
  {
    id: 1,
    icon: FormatListBulleted,
    label: "Startform",
  },
  {
    id: 2,
    icon: SubdirectoryArrowRightRounded,
    label: "Fasi",
  },
  {
    id: 3,
    icon: ViewColumnOutlined,
    label: "Tabella",
  },
  {
    id: 4,
    icon: ViewKanbanOutlined,
    label: "Card",
  },
  {
    id: 5,
    icon: LabelOutlined,
    label: "Labels",
  },
  {
    id: 6,
    icon: DescriptionOutlined,
    label: "Campi condizionali",
  },
  {
    id: 7,
    icon: SmartToyOutlined,
    label: "Automazioni",
  },
  {
    id: 8,
    icon: SyncAltOutlined,
    label: "Connessioni",
  },
  {
    id: 9,
    icon: PeopleAltOutlined,
    label: "Membri",
  },
  {
    id: 10,
    icon: FileUploadOutlined,
    label: "Esportazione",
  },
  {
    id: 11,
    icon: SettingsOutlined,
    label: "Generali",
  },
];

const ItemWrapper = styled(Box)<{ active: "yes" | "no" }>(({ active }) => {
  return {
    padding: theme.spacing(2),
    borderLeft:
      active === "yes" ? `1px solid ${theme.palette.primary.main}` : "none",
    fill:
      active === "yes" ? theme.palette.primary.main : theme.palette.grey[600],
    color:
      active === "yes" ? theme.palette.primary.main : theme.palette.grey[600],
    cursor: "pointer",
  };
});

function SideBar() {
  const [activeId, setActiveId] = useState<number>(9);

  return (
    <Box display="flex" flexDirection="row">
      <Divider orientation="vertical" flexItem />
      <Box display="flex" flexDirection="column">
        {icons.map(({ id, icon, label }) => (
          <ItemWrapper
            key={id}
            component="span"
            display="flex"
            alignItems="center"
            active={activeId == id ? "yes" : "no"}
            onClick={() => setActiveId(id)}
            gap={1}
          >
            <SvgIcon
              component={icon}
              fill="inherit"
              sx={{ width: theme.spacing(2), height: theme.spacing(2) }}
            />
            <Typography variant="caption">{label}</Typography>
          </ItemWrapper>
        ))}
      </Box>
    </Box>
  );
}
export default SideBar;
