import { Box, Divider, styled, SvgIcon, Typography } from "@mui/material";
import React from "react";
import { theme } from "../config/theme";

const ItemWrapper = styled(Box)<{
  active: "yes" | "no";
  padding: string | number;
}>(({ active, padding }) => {
  return {
    padding: padding,
    borderLeft:
      active === "yes" ? `1px solid ${theme.palette.primary.main}` : "none",
    fill:
      active === "yes" ? theme.palette.primary.main : theme.palette.grey[600],
    color:
      active === "yes" ? theme.palette.primary.main : theme.palette.grey[600],
    cursor: "pointer",
  };
});

interface Props {
  activeIconId: number;
  icons: {
    id: number;
    icon: any;
    label?: string;
  }[];
  padding?: string | number;
}

const DialogSideBar: React.FC<Props> = ({
  activeIconId,
  icons,
  padding = theme.spacing(1) + " " + theme.spacing(2),
}) => {
  const [activeId, setActiveId] = React.useState<number>(activeIconId);

  return (
    <Box display="flex" flexDirection="row">
      <Divider orientation="vertical" flexItem />
      <Box display="flex" flexDirection="column">
        {icons.map(({ id, icon, label }) => (
          <ItemWrapper
            key={id}
            component="span"
            display="flex"
            padding={padding}
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
            {label && <Typography variant="caption">{label}</Typography>}
          </ItemWrapper>
        ))}
      </Box>
    </Box>
  );
};

export default DialogSideBar;