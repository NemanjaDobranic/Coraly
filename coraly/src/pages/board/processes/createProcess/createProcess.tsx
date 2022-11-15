import styled from "@emotion/styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../../../config/theme";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import validate from "../../../../helpers/functions/validate";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import Compact from "@uiw/react-color-compact";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../redux/rootReducer";

const BootstrapDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: "1.5rem !important",
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

interface ColorProps {
  hexcolor: string;
}

const Color = styled("div")<ColorProps>(({ hexcolor }) => {
  return {
    background: hexcolor,
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "0.75rem",
  };
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
  const [pickerColor, setPickerColor] = useState("#7b64ff");
  const [showPicker, setShowPicker] = useState(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { processes } = useSelector((state: IRootState) => state.workSpace);
  const initialValues = { process: "", color: pickerColor };
  const [formValues, setFormValues] = useState<IProcess>(initialValues);
  const [formErrors, setFormErrors] = useState<Partial<IProcess>>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && processes) {
      console.log("form", formValues);
      console.log(processes);

      //napraviti requst  kada prodje sve i dobije 200 dodoati proces preko dispatch action i zatvoriti
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

  const handleChangeComplete = (color: any) => {
    setPickerColor(color.hex);
    setFormValues({ ...formValues, color: color.hex });
    setShowPicker(false);
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
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="color">Color</InputLabel>
            <OutlinedInput
              id="color"
              type="text"
              name="color"
              disabled={true}
              value={formValues.color}
              startAdornment={
                <InputAdornment position="start">
                  <Color hexcolor={formValues.color} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="color lens"
                    edge="end"
                    onClick={() => setShowPicker(!showPicker)}
                  >
                    <ColorLensOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Color"
            />
          </FormControl>
        </form>

        {showPicker && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Compact color={pickerColor} onChange={handleChangeComplete} />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="actionSecondary"
          onClick={handleClose}
        >
          Annulla
        </Button>
        <Button variant="contained" type="submit" color="secondary" form="form">
          Crea
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default createProcess;
