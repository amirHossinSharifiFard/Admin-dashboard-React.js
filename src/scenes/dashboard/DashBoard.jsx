import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic
} from "@mui/icons-material";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/Barhart";
import GeograpyChart from "../../components/GeograpyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import BarChart from "../../components/BarChart";
const DashBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subTitle='Welcome to your Dashboard' />
      </Box>
    <Box>
      
    </Box>
    </Box>
  );
};

export default DashBoard;
