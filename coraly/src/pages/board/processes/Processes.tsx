import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CoralyProgress from "../../../components/CoralyProgress";
import { theme } from "../../../config/theme";
import useApi, { HttpMethods } from "../../../hooks/useApi";
import { IRootState } from "../../../redux/rootReducer";
import { IProcess } from "../../../redux/workspace/workSpaceReducer";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import processesIcons from "./processesIcons";

const BaseProces = styled(Box)({
  width: "10.5vw",
  aspectRatio: "1/1",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  "& .MuiSvgIcon-root": {
    transform: "scale(1.5)",
  },
  "&.MuiBox-root:hover": {
    cursor: "pointer",
  },
});

const CreateProcess = styled(BaseProces)({
  border: "1px dashed " + theme.palette.grey[200],
  "& .MuiSvgIcon-root": {
    color: theme.palette.grey[700],
    transform: "scale(1.5)",
  },
});

interface ProcessProps {
  background: string;
}

const Process = styled(BaseProces)<ProcessProps>(({ background }) => {
  return {
    background: background,
    "& .MuiSvgIcon-root": {
      color: theme.palette.grey[700],
      transform: "scale(1.5)",
    },
  };
});

export default function Processes() {
  const [{ loading, response, error }, getProcesses] = useApi();
  const [processes, setProcesses] = useState<IProcess[] | undefined>(undefined);
  const { user, workspace } = useSelector(
    (state: IRootState) => state.workSpace
  );

  useEffect(() => {
    if (response) {
      setProcesses(response);
    }
  }, [response, error]);

  useEffect(() => {
    if (user && workspace) {
      getProcesses("/processes?workspaceId=" + workspace.id, {
        method: HttpMethods.GET,
      });
    }
  }, [user, workspace]);

  const getIcon = (icon: string) => {
    const index = processesIcons.findIndex((i) => i.name === icon);
    return processesIcons[index].icon;
  };

  return !loading && user ? (
    <Box>
      <Typography variant="h2" color={theme.palette.grey[900]} marginBottom={3}>
        Welcome, {user.name}&nbsp;{user.surname}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.grey[800]}
        fontWeight={400}
        marginBottom={3}
      >
        Work with your team mates, take track of your process and
        <br /> close all tasks
      </Typography>

      <Grid container spacing={3}>
        <Grid item>
          <CreateProcess>
            <AddIcon />
            <Typography
              variant="caption"
              color={theme.palette.grey[700]}
              textAlign="center"
            >
              Create a new process
            </Typography>
          </CreateProcess>
        </Grid>

        {processes && processes.length
          ? processes.map((process: IProcess) => (
              <Grid item key={process.id}>
                <Process background={process.color}>
                  {getIcon(process.icon)}
                  <Typography
                    variant="caption"
                    color={theme.palette.common.white}
                    textAlign="center"
                  >
                    {process.name}
                  </Typography>
                </Process>
              </Grid>
            ))
          : null}
      </Grid>
    </Box>
  ) : (
    <CoralyProgress />
  );
}
