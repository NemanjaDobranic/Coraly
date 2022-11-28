import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { theme } from "../../../../config/theme";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";

export interface ICard {
  id: string;
  user: string;
  phone: string;
  contractId: string;
  seller: string;
  email: string;
  date: string;
}

interface Props {
  cards: ICard[];
}

const ProcessContainer = styled(Paper)({
  height: "calc(100% - 56px)",
  overflow: "auto",
  "& .MuiTable-root": {
    width: "98%",
  },
});

const ProcessCell = styled(TableCell)({
  borderLeft: "1px solid " + theme.palette.grey[100],

  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(1),
  },

  [theme.breakpoints.up("md")]: {
    fontSize: theme.spacing(1.25),
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: theme.spacing(1.75),
  },

  ":nth-of-type(1)": {
    width: "5%",
  },
  ":nth-of-type(2)": {
    width: "10%",
    padding: `${theme.spacing(1.125)} ${theme.spacing(1.75)}`,
  },
  ":nth-of-type(3)": {
    width: "30%",
    padding: `${theme.spacing(1.125)} ${theme.spacing(0.75)}`,
  },
  ":nth-of-type(n+4)": {
    width: "auto",
    padding: `${theme.spacing(1.125)} ${theme.spacing(0.75)}`,
  },

  ":nth-of-type(6)>.MuiBox-root": {
    background: theme.palette.actionSecondary.main,
    color: theme.palette.common.white,
    borderRadius: "50%",
    padding: theme.spacing(0.875),
    fontSize: theme.spacing(1),
    fontWeight: 500,
    marginRight: theme.spacing(1),
  },
  ":last-of-type": {
    borderRight: "1px solid " + theme.palette.grey[100],
  },
});

const TableStyled = styled(Table)({
  minWidth: 650,
});

const TableRowStyled = styled(TableRow)({
  cursor: "pointer",
});

const ProcessTable: React.FC<Props> = ({ cards }) => {
  const navigate = useNavigate();

  const showDialog = (card: ICard) => {
    navigate("./dialog", { state: card });
  };

  return (
    <ProcessContainer>
      <TableStyled aria-label="simple table">
        <TableBody>
          {cards.map((card, index) => (
            <TableRowStyled
              key={index}
              sx={{ cursor: "pointer" }}
              onClick={() => showDialog(card)}
            >
              <ProcessCell></ProcessCell>
              <ProcessCell>{card.id}</ProcessCell>
              <ProcessCell>{card.user}</ProcessCell>
              <ProcessCell>{card.phone}</ProcessCell>
              <ProcessCell>{card.contractId}</ProcessCell>
              <ProcessCell>
                <Box component="span">PL</Box>
                {card.seller}
              </ProcessCell>
              <ProcessCell>{card.date}</ProcessCell>
            </TableRowStyled>
          ))}
        </TableBody>
      </TableStyled>
    </ProcessContainer>
  );
};

export default ProcessTable;
