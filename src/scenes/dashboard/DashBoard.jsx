import React from "react";

import Header from "../../components/Header";
import { Box } from "@mui/material";
// import { SpaceBar } from "@mui/icons-material";
import BarChart from "../../components/BarChart";
const DashBoard = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subTitle='Welcome to your Dashboard' />
        
      </Box>
     <Box height="75vh">
      <BarChart />
     </Box>
    </Box>
  );
};

export default DashBoard;
