import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../../../config/theme";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import validate from "../../../../helpers/functions/validate";

const BootstrapDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: "1.5rem 1.5rem 0 1.5rem !important",
    width: theme.breakpoints.values.md,
    maxWidth: theme.breakpoints.values.md,
  },

  "& .MuiDialogContent-root": {
    padding: "1.5rem !important",
  },
  "& .MuiDialogActions-root": {
    padding: "0 1.5rem 1.5rem 1.5rem !important",
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

interface IProcess {
  process: string;
  color: string;
}

const createProcess = () => {
  const [open, setOpen] = useState(true);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const initialValues = { process: "", color: "" };
  const [formValues, setFormValues] = useState<IProcess>(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<IProcess>>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("form", formValues);
    }
  }, [formErrors]);

  const handleClose = () => {
    setOpen(false);
    navigate("../");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    const validationResult = validate({ [name]: value })[
      name as keyof IProcess
    ];
    validationResult !== undefined
      ? setFormErrors({ ...formErrors, ...{ [name]: validationResult } })
      : delete formErrors[name as keyof IProcess];
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
      <DialogContent>
        <form id="form" noValidate onSubmit={handleSubmit}>
          <TextField
            label="Process name"
            variant="outlined"
            type="text"
            name="process"
            fullWidth
            sx={{ marginBottom: "24px" }}
            value={formValues.process}
            onChange={handleChange}
            error={!!formErrors.process}
            helperText={
              <Fade in={!!formErrors.process}>
                {<span>{formErrors.process}</span>}
              </Fade>
            }
          />
          <TextField
            label="Color"
            variant="outlined"
            type="text"
            name="color"
            fullWidth
            sx={{ marginBottom: "18px" }}
            value={formValues.color}
            onChange={handleChange}
            error={!!formErrors.color}
            helperText={
              <Fade in={!!formErrors.color}>
                {<span>{formErrors.color}</span>}
              </Fade>
            }
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" form="form">
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default createProcess;
