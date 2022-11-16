import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { IProcess } from "../../../../redux/workspace/workSpaceReducer";
import { styled, Box, Toolbar } from "@mui/material";
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
} from "../../../../assets/images/index";

const Process: React.FC = () => {
  const navigate = useNavigate();
  const [process, setProcess] = useState<IProcess | null>(null);
  const { state } = useLocation();

  useEffect(() => {
    !state ? navigate("../") : setProcess(state.process);
  }, []);

  const TableTools = styled("div")({});

  return (
    <>
      <Toolbar>
        <TableTools>
          <Box component="img" src={WebLayoutCenterIcon}></Box>
        </TableTools>
      </Toolbar>
    </>
  );
};

export default Process;
