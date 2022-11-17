import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { theme } from "../../../../config/theme";
import GeometricShape from "../../../../components/GeometricShape";
import { type } from "os";
import { Box } from "@mui/material";

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
  protein: string,
  date: string
) {
  return { name, calories, fat, carbs, protein, date };
}

const rows = [
  createData(
    "VOD-153",
    "Theresa Webb",
    "+39  065262123",
    "IT069823456",
    "Alessandro Durni",
    "3/25/2021"
  ),
  createData(
    "VOD-153",
    "Theresa Webb",
    "+39  065262123",
    "IT069823456",
    "Alessandro Durni",
    "3/25/2021"
  ),
  createData(
    "VOD-153",
    "Theresa Webb",
    "+39  065262123",
    "IT069823456",
    "Alessandro Durni",
    "3/25/2021"
  ),
];

const ProcessContainer = styled(Paper)({
  height: "100vh",
  "& .MuiTable-root": {
    width: "98%",
  },
});

const ProcessCell = styled(TableCell)({
  borderLeft: "1px solid " + theme.palette.grey[100],
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

function ProcessTable() {
  return (
    <ProcessContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <ProcessCell></ProcessCell>
              <ProcessCell>{row.name}</ProcessCell>
              <ProcessCell>{row.calories}</ProcessCell>
              <ProcessCell>{row.fat}</ProcessCell>
              <ProcessCell>{row.carbs}</ProcessCell>
              <ProcessCell>
                <Box component="span">PL</Box>
                {row.protein}
              </ProcessCell>
              <ProcessCell>{row.date}</ProcessCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ProcessContainer>
  );
}

export default ProcessTable;
