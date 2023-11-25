import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";

//  Data
import { mockDataInvoices } from "../../data/mockData";

// components
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-columns--cell"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "cost",
      headerName: "Cost",
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1
    },
    
    
    {
      field: "date",
      headerName: "Date",
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`
          }
        }}>
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Invoices;
