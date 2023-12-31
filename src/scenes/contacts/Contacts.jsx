import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

//  Data
import { mockDataContacts } from "../../data/mockData";

// components
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5
    },
    {
      field: "registrarId",
      headerName: "RegistrarId"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-columns--cell"
    },
    {
      field: "age",
      headerName: "Age",
      typ: "number",
      headerAlign: "left",
      align: "left"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1
    },
    {
      field: "city",
      headerName: "City",
      flex: 1
    },
    {
      field: "zipCode",
      headerName: "Zipcode",
      flex: 1
    }
  ];
  return (
    <Box m='20px' width='100'>
      <Header title='CONTACTS' subTitle='List Contacts for future Refrence' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-columns--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        }}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
