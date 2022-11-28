import * as React from "react";
import Drawer from "@mui/material/Drawer";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import { theme } from "../../../../../config/theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  BagIcon,
  ArrowDownRoundedIcon,
  RightArrowIcon,
} from "../../../../../assets/images";

const drawerWidth = "31%";

const InfoDrawer = styled(Drawer)({
  display: "flex",
  width: drawerWidth,
  flexShrink: 0,

  "& .MuiDrawer-paper": {
    width: drawerWidth,
    padding: theme.spacing(3),
    position: "absolute",
    minHeight: "100%",
    overflow: "auto",
    justifyContent: "space-between",
  },
});

interface IProcessInfo {
  contractNumbers: string;
  customerNumber: string;
  email: string;
  phoneProvider: string;
  contractType: string;
}

const initialValues = {
  contractNumbers: "",
  customerNumber: "",
  email: "",
  contractType: "",
  phoneProvider: "",
};

const AccordionRoot = styled(Accordion)({
  boxShadow: "none",
  "&:before": {
    display: "none",
  },

  "& .MuiAccordionSummary-root": {
    minHeight: theme.spacing(0),
    padding: theme.spacing(0.35),
    display: "flex",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    "&.Mui-expanded": {
      minHeight: theme.spacing(0),
    },
    "& .MuiAccordionSummary-content": {
      alignItems: "center",
      margin: 0,
      gap: theme.spacing(2.5),
    },
  },
});

const AccDetails = styled(AccordionDetails)({
  padding: 0,
});

const TextFieldStyled = styled(TextField)({
  marginBottom: "24px",
});

const ProcessInfo = () => {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] =
    React.useState<IProcessInfo>(initialValues);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  React.useEffect(() => handleDrawerOpen, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setTimeout(() => navigate("../"), 200);
  };

  const getLabelText = (key: string) => {
    const array = key.split(/(?=[A-Z])/);
    const label = array.join(" ").toLowerCase();
    return label[0].toUpperCase() + label.substring(1);
  };

  const getFormControl = (key: string) =>
    key !== "contractType" ? (
      <TextFieldStyled
        key={key}
        label={getLabelText(key)}
        variant="outlined"
        type="text"
        name={key}
        fullWidth
        value={formValues[key as keyof typeof formValues]}
        onChange={handleChange}
      />
    ) : (
      <FormControl key={key} fullWidth>
        <InputLabel id={key}>{getLabelText(key)}</InputLabel>
        <Select
          MenuProps={{ disablePortal: true }}
          labelId={key}
          value={formValues[key as keyof typeof formValues]}
          label={getLabelText(key)}
        >
          <MenuItem value={"1 Anno"}>1 Anno</MenuItem>
          <MenuItem value={"Mensile"}>Mensile</MenuItem>
        </Select>
      </FormControl>
    );

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <InfoDrawer variant="persistent" anchor="right" open={open}>
        <form
          id="form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          {Object.keys(formValues).map((key: string) => getFormControl(key))}
          {["TIM", "Disney Plus"].map((value, index) => (
            <AccordionRoot key={index}>
              <AccordionSummary
                expandIcon={
                  <Box component="img" src={ArrowDownRoundedIcon}></Box>
                }
              >
                <Box component="img" src={BagIcon}></Box>
                <Typography color={theme.palette.grey[800]} fontWeight={600}>
                  {value}
                </Typography>
              </AccordionSummary>
              <AccDetails>
                {["email", "contractType", "discount"].map((key) =>
                  getFormControl(key)
                )}
              </AccDetails>
            </AccordionRoot>
          ))}
        </form>

        <Box display="flex" gap={theme.spacing(2)}>
          <Box
            component="img"
            src={RightArrowIcon}
            sx={{ transform: "rotate(180deg)" }}
          />
          <Box component="img" src={RightArrowIcon} />
          <Button
            variant="outlined"
            type="submit"
            color="actionSecondary"
            sx={{ marginLeft: "auto" }}
            onClick={handleDrawerClose}
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
        </Box>
      </InfoDrawer>
    </ClickAwayListener>
  );
};

export default ProcessInfo;
