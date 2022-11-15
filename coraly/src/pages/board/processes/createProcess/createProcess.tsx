import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../../../config/theme";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const BootstrapDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(1.875),
    width: theme.breakpoints.values.md,
    maxWidth: theme.breakpoints.values.md,
  },

  "& .MuiDialogContent-root": {
    padding: "0 1.5rem",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(3),
  },
});

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 3, color: theme.palette.grey[900] }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const createProcess = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("../");
  };

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Create a new process
      </BootstrapDialogTitle>
      <DialogContent>Forma</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default createProcess;
