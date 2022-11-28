import {
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  IconButton,
  Dialog,
  styled,
  Divider,
} from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { theme } from "../../../../../config/theme";
import CloseIcon from "@mui/icons-material/Close";
import SideBar from "./SideBar";

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: "1.5rem !important",
    width: theme.spacing(164),
    maxWidth: theme.spacing(164),
  },

  "& .MuiDialogContent-root": {
    padding: "1.5rem !important",
  },
  "& .MuiDialogActions-root": {
    padding: "0 1.5rem 1.5rem 1.5rem !important",
  },
});

const ContentWrapper = styled(DialogContent)({
  display: "flex",
  flexDirection: "row",
});

function Settings() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("../");
  };

  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle
        sx={{ m: 0, p: 3, color: theme.palette.grey[900] }}
        {...other}
      >
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

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Impostazioni
      </BootstrapDialogTitle>
      <ContentWrapper>
        <SideBar />
        <Divider orientation="vertical" flexItem />
        <Outlet />
      </ContentWrapper>
    </BootstrapDialog>
  );
}

export default Settings;
