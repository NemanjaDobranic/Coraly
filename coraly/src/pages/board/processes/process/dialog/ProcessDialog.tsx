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
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Icon,
  SvgIcon,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { theme } from "../../../../../config/theme";
import { ICard } from "../ProcessTable";
import CloseIcon from "@mui/icons-material/Close";
import {
  AccountIcon,
  DataStorageIcon,
  DateIcon,
  EyeIcon,
  FocusIcon,
  FolderIcon,
  LinkIcon,
  MinusPathIcon,
  TrashIcon,
  PhaseStandardIcon,
  ArrowDownRoundedIcon,
  DocumentIcon,
  PhaseIcon,
} from "../../../../../assets/images/index";
import {
  AddCircleOutlineRounded,
  ShoppingBagOutlined,
  FormatLineSpacingOutlined,
  ModeCommentOutlined,
  AttachFileOutlined,
  InsertLinkOutlined,
  SegmentOutlined,
} from "@mui/icons-material";
import getDateTime from "../../../../../helpers/functions/getDateTime";
import { blue, orange, purple } from "@mui/material/colors";

const TrailingBox = styled(Box)({
  background: theme.palette.actionSecondary.main,
  color: theme.palette.common.white,
  borderRadius: "50%",
  padding: `${theme.spacing(0.5)} ${theme.spacing(0.75)}`,
  fontSize: theme.spacing(1.25),
});

const AddIcon = styled(AddCircleOutlineRounded)({
  color: theme.palette.primary.main,
  cursor: "pointer",
});

const Chip = styled(Box)<{ background: string; padding: string | number }>(
  ({ background, padding }) => {
    return {
      background: background,
      padding: padding,
      fontWeight: 600,
      fontSize: theme.spacing(1.75),
      display: "flex",
      alignItems: "center",
    };
  }
);

const DividerStyled = styled(Divider)<{
  height?: string;
  marginright?: string;
}>(({ height = "100%", marginright = "0" }) => {
  return {
    borderWidth: theme.spacing(0.1),
    height: height,
    marginRight: marginright,
  };
});

const TextFieldStyled = styled(TextField)<{ marginbottom?: string }>(
  ({ marginbottom = "0" }) => {
    return {
      marginBottom: marginbottom,
    };
  }
);

const TextAreaStyled = styled(TextFieldStyled)({
  "& .MuiOutlinedInput-root .MuiInputBase-input": {
    padding: 0,
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.grey[700],
    fontWeight: 400,
  },
});

const RadioStyled = styled(Radio)({
  padding: `${theme.spacing(0.5)}  ${theme.spacing(1)}`,
});

const Info = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      paddingRight={theme.spacing(2)}
    >
      <Box component="header" display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={5} justifyContent="space-between">
          <Box display="flex" gap={0.35} alignItems="center">
            {["PL", "CM", "FN", "LM", "ST"].map((value) => (
              <TrailingBox component="span" key={value}>
                {value}
              </TrailingBox>
            ))}
            <Typography color={theme.palette.actionSecondary.main}>
              +5
            </Typography>

            <AddIcon />
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
            <Chip
              padding={`${theme.spacing(0.25)} ${theme.spacing(2)}`}
              key={index}
              background={background}
              color="white"
              borderRadius="20.5%/50%"
            >
              {value}
            </Chip>
          ))}
          <AddIcon />
        </Box>
        <Box display="flex" alignItems="center" gap={4}>
          <Box display="flex" gap={0.5} alignItems="center">
            <Box component="img" src={AccountIcon}></Box>
            <Typography color={theme.palette.grey[700]}>
              Select vendors
            </Typography>
            <Box component="img" src={ArrowDownRoundedIcon}></Box>
          </Box>

          <DividerStyled orientation="vertical" flexItem />

          <Box display="flex" gap={1.5}>
            {["#database_object_1", "#db-oject1"].map((value, index) => (
              <Chip
                background={theme.palette.grey[200]}
                padding={0}
                key={index}
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
              </Chip>
            ))}
          </Box>
        </Box>
        <DividerStyled />
      </Box>

      <Box component="form" display="flex" flexDirection="column" gap={2}>
        <Box component="section" display="flex" flexDirection="column" gap={2}>
          <Typography variant="caption">Startform Name</Typography>

          <TextFieldStyled
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            margin="none"
          />

          <TextAreaStyled
            label="Description"
            variant="outlined"
            type="text"
            multiline
            fullWidth
            minRows={2}
            helperText="This is a description"
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
              <DividerStyled orientation="vertical" height="80%" />
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextFieldStyled
                label="Company name"
                variant="outlined"
                type="text"
                fullWidth
              />

              <TextFieldStyled
                label="Surname"
                variant="outlined"
                type="text"
                fullWidth
              />

              <RadioGroup defaultValue="person">
                <FormControlLabel
                  value="company"
                  control={<RadioStyled />}
                  label="Company"
                />
                <FormControlLabel
                  value="person"
                  control={<RadioStyled />}
                  label="Person"
                />
              </RadioGroup>
            </Box>
          </Box>
        </Box>
        <Box component="section" display="flex" flexDirection="column" gap={2}>
          <Typography variant="caption">Gender</Typography>
          <RadioGroup defaultValue="female">
            <FormControlLabel
              value="male"
              control={<RadioStyled />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<RadioStyled />}
              label="Female"
            />
            <FormControlLabel
              value="other"
              control={<RadioStyled />}
              label="Not declared"
            />
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

const AccordionRoot = styled(Accordion)({
  boxShadow: "none",

  "&.MuiPaper-root": {
    width: "100%",
  },

  "&.Mui-expanded": {
    margin: 0,
  },

  "&:before": {
    display: "none",
  },

  "& .MuiAccordionSummary-root": {
    minHeight: theme.spacing(0),
    padding: theme.spacing(1.5),
    background: theme.palette.grey.A200,
    borderRadius: theme.spacing(1),
    display: "flex",
    marginBottom: theme.spacing(2),
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

const Phase = () => {
  const phases = [
    {
      icon: PhaseStandardIcon,
      label: "Phase 2",
      ready: true,
      controls: [
        {
          type: "text",
          label: "Contract number",
        },
        {
          type: "text",
          label: "Contract number 2",
        },
      ],
    },
    {
      icon: PhaseStandardIcon,
      label: "New Contract",
      ready: false,
      controls: [
        {
          type: "date",
          label: "Start date",
        },
      ],
    },
    {
      icon: PhaseIcon,
      label: "Start",
      ready: false,
      controls: [
        {
          type: "date",
          label: "Start date",
        },
      ],
    },
  ];

  const getFormControl = (type: string, label: string) => (
    <TextFieldStyled
      key={label}
      label={label}
      variant="outlined"
      type="text"
      fullWidth
      onFocus={(e: any) => (e.target.type = type)}
      onBlur={(e: any) => (e.target.type = "text")}
      marginbottom="24px"
    />
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={6}
      paddingRight={theme.spacing(2)}
    >
      <Typography component="header" variant="h6">
        Fields' Phase
      </Typography>
      <Box component="form" position="relative">
        {phases.map(({ icon, label, ready, controls }) => (
          <AccordionRoot key={label}>
            <AccordionSummary
              expandIcon={
                <Box component="img" src={ArrowDownRoundedIcon}></Box>
              }
            >
              <Box component="img" src={icon}></Box>
              <Typography
                marginRight="auto"
                color={theme.palette.grey[800]}
                fontWeight={600}
              >
                {label}
              </Typography>
              {ready && (
                <Chip
                  background={theme.palette.primary.main}
                  padding={`${theme.spacing(0.25)} ${theme.spacing(2)}`}
                  color="white"
                  borderRadius="15%/50%"
                  marginRight={theme.spacing(2)}
                >
                  Ready
                </Chip>
              )}
            </AccordionSummary>
            <AccordionDetailsStyled>
              {controls.map(({ type, label }) => getFormControl(type, label))}
            </AccordionDetailsStyled>
          </AccordionRoot>
        ))}
      </Box>
    </Box>
  );
};

const SideBar = () => {
  const icons = [
    {
      id: 1,
      icon: ShoppingBagOutlined,
    },
    {
      id: 2,
      icon: FormatLineSpacingOutlined,
    },
    {
      id: 3,
      icon: ModeCommentOutlined,
    },
    {
      id: 4,
      icon: AttachFileOutlined,
    },
    {
      id: 5,
      icon: InsertLinkOutlined,
    },
    {
      id: 6,
      icon: SegmentOutlined,
    },
  ];

  const [active, setActive] = useState<number>(2);

  return (
    <Box display="flex" flexDirection="row">
      <Divider orientation="vertical" />
      <Box display="flex" flexDirection="column">
        <Box paddingTop={theme.spacing(4)}></Box>
        {icons.map(({ id, icon }) => (
          <SvgIcon
            component={icon}
            key={id}
            sx={{
              width: theme.spacing(2),
              height: theme.spacing(2),
              p: `${theme.spacing(2)} 0 ${theme.spacing(2)} ${theme.spacing(
                2
              )}`,
              boxSizing: "content-box",
              cursor: "pointer",
              fill:
                active === id
                  ? theme.palette.primary.main
                  : theme.palette.grey[600],
              borderLeft:
                active === id
                  ? `1px solid ${theme.palette.primary.main}`
                  : "none",
            }}
            onClick={() => setActive(id)}
          />
        ))}
      </Box>
    </Box>
  );
};

const BootstrapDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: "1.5rem !important",
    width: theme.spacing(148.5),
    maxWidth: theme.spacing(148.5),

    margin: 0,
  },

  "& .MuiDialogContent-root": {
    padding: `${theme.spacing(1)}  ${theme.spacing(3)} !important`,
  },
  "& .MuiDialogActions-root": {
    padding: `0 ${theme.spacing(3)} ${theme.spacing(3)}  ${theme.spacing(
      3
    )} !important`,
  },
});

const UnderlinedText = styled(Typography)({
  textDecoration: "underline",
});

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const DialogTitleStyled = styled(DialogTitle)({
  margin: 0,
  padding: `${theme.spacing(3)}  ${theme.spacing(3)} 0 ${theme.spacing(3)}`,
  color: theme.palette.grey[900],
});

const DialogContentStyled = styled(DialogContent)({
  display: "grid",
  gridTemplateColumns: `1fr 1fr ${theme.spacing(2.57)}`,
});

const AccordionDetailsStyled = styled(AccordionDetails)({
  padding: 0,
});

const CloseButton = styled(Button)({
  color: theme.palette.grey[500],
  padding: 0,
});

const ProcessDialog = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [card, setCard] = useState<ICard | null>(null);

  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose } = props;

    return (
      <DialogTitleStyled display="flex" gap={theme.spacing(2)}>
        {children}
        <Box
          display="flex"
          gap={theme.spacing(2)}
          alignItems="center"
          marginLeft="auto"
        >
          <Box component="img" src={EyeIcon}></Box>
          <UnderlinedText color="primary" fontWeight={600}>
            KO Motivation
          </UnderlinedText>
          {[FolderIcon, FocusIcon, LinkIcon, MinusPathIcon, TrashIcon].map(
            (icon) => (
              <Box component="img" src={icon} key={icon}></Box>
            )
          )}
        </Box>

        <Box display="flex">
          <DividerStyled
            orientation="vertical"
            marginright={theme.spacing(1.5)}
          />
          <CloseButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Box>
      </DialogTitleStyled>
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
        <DialogContentStyled>
          <Info />
          <Phase />
          <SideBar />
        </DialogContentStyled>

        <DialogActions>
          <Typography variant="caption">Fase ID:&nbsp;</Typography>
          <Typography marginRight="auto">61571535e7058c00143322b8</Typography>
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
