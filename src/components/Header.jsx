import React from "react";
import { Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb='30px'>
      <Typography
        component='h2'
        variant="h2"
        color={colors.grey[100]}
        fontWeight='bold'
        mb='5px'>
        {title}
      </Typography>
      <Typography component='h5' color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
