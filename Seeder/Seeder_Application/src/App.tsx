import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Typography } from "@mui/material";
import theme from "./theme";
import { DividerAtom } from "./components/atoms/Divider/index";
import { TypographyAtom } from "./components/atoms/Typography";

export default function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
        sx={{
          backgroundColor: theme.palette.background.elevation2,
          padding: 4,
        }}
      >

        <Typography variant="heading2" color="secondary"> Local Application </Typography> <br /> <br />   

        <DividerAtom orientation="horizontal" variant="fullWidth" borderBottomWidth="5px"/>

        <br />

        {/* <DividerAtom orientation="horizontal" variant="middle">Center</DividerAtom>
        <br />

        <DividerAtom orientation="horizontal" textAlign="right" variant="fullWidth">Right</DividerAtom>

        <br />

        <DividerAtom orientation="vertical" height="50px" sx={{ width:"15px"}}/> */}

        <br />
        
        <br />

        <TypographyAtom
          variant="title" 
          color= {theme.palette.text.highEmphasis}
          children="Login to Seeder"/> 

        <br />

        {/* <TypographyAtom 
          variant="heading3" 
          color= {theme.palette.text.lowEmphasis}
          children="Enter your mail id and password to login" /> <br /> <br /> */}


        
        {/* <img src={iconPath.developer} alt="devimage" style={{ width:'20%', height: 'auto'}}/> */}


        </Box>
    </ThemeProvider>
  );
}