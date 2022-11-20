import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  styled,
  Typography,
} from "@mui/material";
import {
  SearchOutlined,
  AddCircleOutlineOutlined,
  InfoOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import React, { useEffect, useState } from "react";
import { theme } from "../../../../../config/theme";
import useApi, { HttpMethods } from "../../../../../hooks/useApi";
import CoralyProgress from "../../../../../components/CoralyProgress";

const Root = styled(Box)({
  flex: 1,
  padding: `0 ${theme.spacing(2)}`,
});

const Header = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
});

const InviteButton = styled(Button)({
  width: "fit-content",
  height: "fit-content",
  marginLeft: "auto",
});

const MembersGrid = styled(DataGrid)({
  border: 0,
  "&>.MuiDataGrid-main": {
    "&>.MuiDataGrid-columnHeaders": {
      border: "none none auto none",
      background: theme.palette.grey.A200,
      fontWeight: 600,
      color: theme.palette.grey.A100,
      fontSize: theme.spacing(1.75),
      "& .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
      },
    },

    "& div div div div >.MuiDataGrid-cell": {
      borderLeft: "none",
    },
  },

  "& .MuiDataGrid-footerContainer": {
    border: 0,
  },
});

const permissions = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "user",
    label: "Utente",
  },
  {
    value: "vendor",
    label: "Venditore",
  },
  {
    value: "readOnly",
    label: "Solo Lettura",
  },
];

const SelectPermission = styled(Select)<{ value: string | undefined }>(
  ({ value }) => {
    return {
      color: theme.palette.common.white,
      background: getBackground(value),
      boxShadow: "none",
      padding: `${theme.spacing(0.25)} ${theme.spacing(1)}`,
      ".MuiOutlinedInput-notchedOutline": { display: "none" },

      "& .MuiInputBase-input": {
        padding: 0,
      },

      "& .MuiSelect-icon": {
        fill: "white !important",
      },
    };
  }
);

function getBackground(value: string | undefined): string {
  switch (value) {
    case "admin":
      return theme.palette.primary.main;
    case "user":
      return theme.palette.actionSecondary.main;
    case "vendor":
      return theme.palette.secondary.main;
    case "readOnly":
      return theme.palette.grey[700];

    default:
      return "inherit";
  }
}

interface Member {
  id: string;
  user: string;
  email: string;
  permission: string;
}

function Members() {
  const [{ loading, response, error }, executeApiCall] = useApi(
    {
      path: `/members`,
      options: {
        method: HttpMethods.GET,
      },
    },
    true
  );

  const [data, setData] = useState<Member[]>([]);
  const [search, setSearch] = useState("");

  const columns: GridColDef[] = [
    {
      field: "user",
      headerName: "Utente",
      width: 186,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 457,
      editable: true,
    },
    {
      field: "permission",
      headerName: "Permessi",
      width: 255,
      editable: true,
      renderHeader: (params) => (
        <Box display="flex" alignItems="center" gap={1}>
          {params.colDef.headerName}
          <InfoOutlined sx={{ fill: theme.palette.grey[500] }} />
        </Box>
      ),
      renderCell: ({ row }) => (
        <SelectPermission
          value={row.permission}
          onChange={(e) => changePremission(e, row)}
        >
          {permissions.map((p) => (
            <MenuItem key={p.value} value={p.value}>
              {p.label}
            </MenuItem>
          ))}
        </SelectPermission>
      ),
    },
    {
      field: "action",
      headerName: "",
      sortable: false,
      width: 36,
      renderCell: (params) => (
        <DeleteOutlined
          sx={{ fill: theme.palette.grey[500], cursor: "pointer" }}
          onClick={() => deleteRow(params.row)}
        />
      ),
    },
  ];

  useEffect(() => {}, [data, search]);

  useEffect(() => {
    if (response && !data.length) {
      setData(response);
    }
  }, [response]);

  const changePremission = (e: any, row: Member) => {
    row.permission = e.target.value;

    const index = data.findIndex((el) => el.id === row.id);
    let newData = [...data];
    newData[index] = row;

    setData(newData);

    executeApiCall(`/members/${row.id}`, {
      method: HttpMethods.PATCH,
      body: JSON.stringify({
        permission: row.permission,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const deleteRow = (row: Member) => {
    const newData = data.filter((el) => el.id !== row.id);
    setData(newData);

    executeApiCall(`/members/${row.id}`, {
      method: HttpMethods.DELETE,
    });
  };

  const searchForUsers = (e: any) => {
    const search = e.target.value;
    setSearch(search);
  };

  const filterData = () => {
    if (!search.length) {
      return data;
    }

    return data.filter((data) =>
      data.user.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <Root>
      <Header>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <OutlinedInput
            id="color"
            type="text"
            name="color"
            placeholder="Cerca utente"
            value={search}
            onChange={searchForUsers}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography variant="caption" textAlign="center">
          Membri
        </Typography>
        <InviteButton variant="contained">
          <AddCircleOutlineOutlined />
          <Typography variant="button" marginLeft={1}>
            Invita
          </Typography>
        </InviteButton>
      </Header>
      <Box sx={{ height: theme.spacing(60), width: "100%" }}>
        {data.length ? (
          <MembersGrid
            rows={filterData()}
            columns={columns}
            getRowId={(row) => row.id}
            checkboxSelection
            pageSize={25}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        ) : (
          <CoralyProgress />
        )}
      </Box>
    </Root>
  );
}

export default Members;
