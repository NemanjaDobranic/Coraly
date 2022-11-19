import styled from "@emotion/styled";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { theme } from "../../../../../config/theme";
import { ICard } from "../ProcessTable";
import CloseIcon from "@mui/icons-material/Close";
import {
  AccountIcon,
  AttachIcon,
  CommentIcon,
  DataStorageIcon,
  DateIcon,
  EyeIcon,
  FocusIcon,
  FolderIcon,
  LinkIcon,
  ListIcon,
  MinusPathIcon,
  TrashIcon,
  PhaseStandardIcon,
  ArrowDownRoundedIcon,
  DocumentIcon,
} from "../../../../../assets/images/index";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import getDateTime from "../../../../../helpers/functions/getDateTime";
import { blue, orange, purple } from "@mui/material/colors";

const Info = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box component="header" display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={5}>
          <Box display="flex" gap={0.5} alignItems="center">
            {["PL", "CM", "FN", "LM", "ST"].map((value) => (
              <Box
                component="span"
                key={value}
                sx={{
                  background: theme.palette.actionSecondary.main,
                  color: theme.palette.common.white,
                  borderRadius: "50%",
                  padding: theme.spacing(0.75),
                }}
              >
                {value}
              </Box>
            ))}
            <Typography variant="h6" color={theme.palette.actionSecondary.main}>
              +5
            </Typography>

            <AddCircleOutlineRoundedIcon
              sx={{
                color: theme.palette.primary.main,
                cursor: "pointer",
              }}
            />
          </Box>
          <Box display="flex" gap={0.5} alignItems="center">
            <Box component="img" src={PhaseStandardIcon}></Box>
            <Typography color={theme.palette.grey[700]}>Chapter One</Typography>
            <Box component="img" src={ArrowDownRoundedIcon}></Box>
          </Box>
          <Box display="flex" gap={0.5} alignItems="center">
            <Box component="img" src={DateIcon}></Box>
            <Typography color={theme.palette.grey[700]}>
              {getDateTime(new Date())}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap={1}>
          {[
            { background: blue[500], value: "Label 1" },
            { background: purple[500], value: "Label 2" },
            { background: orange[500], value: "Label 2" },
          ].map(({ background, value }, index) => (
            <Box
              key={index}
              sx={{
                background: background,
                padding: `${theme.spacing(0.25)} ${theme.spacing(2)}`,
                fontWeight: 600,
                fontSize: theme.spacing(1.75),
                display: "flex",
                alignItems: "center",
              }}
              color="white"
              borderRadius="20.5%/50%"
            >
              {value}
            </Box>
          ))}
          <AddCircleOutlineRoundedIcon
            sx={{
              color: theme.palette.primary.main,
              cursor: "pointer",
            }}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={4}>
          <Box display="flex" gap={0.5} alignItems="center">
            <Box component="img" src={AccountIcon}></Box>
            <Typography color={theme.palette.grey[700]}>
              Select vendors
            </Typography>
            <Box component="img" src={ArrowDownRoundedIcon}></Box>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderWidth: theme.spacing(0.1) }}
          />

          <Box display="flex" gap={1.5}>
            {["#database_object_1", "#db-oject1"].map((value, index) => (
              <Box
                key={index}
                sx={{
                  background: theme.palette.grey[200],
                  fontWeight: 600,
                  fontSize: theme.spacing(1.75),
                  display: "flex",
                  alignItems: "center",
                }}
                color="white"
                borderRadius="8%/50%"
              >
                <Typography
                  fontSize={theme.spacing(1.75)}
                  margin={`${theme.spacing(0.5)} ${theme.spacing(2.5)}`}
                  color={theme.palette.grey.A100}
                  display="flex"
                  alignItems="center"
                  gap={0.75}
                >
                  <Box component="img" src={DataStorageIcon}></Box>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Divider flexItem sx={{ borderWidth: theme.spacing(0.1) }} />
      </Box>

      <Box component="form" display="flex" flexDirection="column" gap={2}>
        <Box component="section" display="flex" flexDirection="column" gap={2}>
          <Typography variant="caption">Startform Name</Typography>

          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            sx={{ marginBottom: "0" }}
          />

          <TextField
            label="Description"
            variant="outlined"
            type="text"
            multiline
            fullWidth
            minRows={2}
            helperText="This is a description"
            sx={{
              marginBottom: "0",
              "& .MuiOutlinedInput-root .MuiInputBase-input": {
                padding: 0,
              },
              "& .MuiFormHelperText-root": {
                color: theme.palette.grey[700],
                fontWeight: 400,
              },
            }}
          />
        </Box>
        <Box component="section" display="flex" flexDirection="column" gap={2}>
          <Typography variant="caption">Company data</Typography>

          <Box
            display="grid"
            gridTemplateColumns={`${theme.spacing(3)} 1fr`}
            gap={2}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
            >
              <Box component="img" src={DocumentIcon}></Box>
              <Divider orientation="vertical" />
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Company name"
                variant="outlined"
                type="text"
                fullWidth
                sx={{ marginBottom: "0" }}
              />

              <TextField
                label="Surname"
                variant="outlined"
                type="text"
                fullWidth
                sx={{ marginBottom: "0" }}
              />

              <RadioGroup defaultValue="person" name="radio-buttons-group">
                <FormControlLabel
                  value="company"
                  control={<Radio />}
                  label="Company"
                />
                <FormControlLabel
                  value="person"
                  control={<Radio />}
                  label="Person"
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Phase = () => {
  return (
    <Box>
      <header>Header 2</header>
      <main></main>
    </Box>
  );
};

const BootstrapDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: "1.5rem !important",
    width: theme.spacing(148.5),
    maxWidth: theme.spacing(148.5),
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    margin: 0,
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

const ProcessDialog = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [card, setCard] = useState<ICard | null>(null);

  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose } = props;

    return (
      <DialogTitle
        display="flex"
        gap={theme.spacing(2)}
        sx={{ m: 0, p: 3, color: theme.palette.grey[900] }}
      >
        {children}
        <Box
          display="flex"
          gap={theme.spacing(2)}
          alignItems="center"
          sx={{ marginLeft: "auto" }}
        >
          <Box component="img" src={EyeIcon}></Box>
          <Typography
            color="primary"
            fontWeight={600}
            sx={{ textDecoration: "underline" }}
          >
            KO Motivation
          </Typography>
          {[FolderIcon, FocusIcon, LinkIcon, MinusPathIcon, TrashIcon].map(
            (icon) => (
              <Box component="img" src={icon} key={icon}></Box>
            )
          )}
        </Box>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ color: theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  useEffect(() => {
    !state ? navigate("../") : setCard(state);
  }, []);

  const handleClose = () => {
    navigate("../");
  };

  return (
    card && (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {card.email}
        </BootstrapDialogTitle>
        <DialogContent sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <Info />
          <Phase />
        </DialogContent>

        <DialogActions>
          <Button
            variant="outlined"
            color="actionSecondary"
            onClick={handleClose}
          >
            Annulla
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            form="form"
          >
            Salva
          </Button>
        </DialogActions>
      </BootstrapDialog>
    )
  );
};

export default ProcessDialog;
