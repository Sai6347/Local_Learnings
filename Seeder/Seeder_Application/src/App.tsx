import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import theme from "./theme";
import { DividerAtom } from "./components/atoms/Divider/index";
import { TypographyAtom } from "./components/atoms/Typography";
import iconPath from "./utils/Constants";
// import GoogleIcon from '../public/assets/images/google.svg';
import { SocialLogin } from "./components/molecules/SocialLogin";

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

        <br /> <br />

        {/* <TypographyAtom 
          variant="heading3" 
          color= {theme.palette.text.lowEmphasis}
          children="Enter your mail id and password to login" /> <br /> <br /> */}


        
        {/* <img src={iconPath.developer} alt="devimage" style={{ width:'20%', height: 'auto'}}/> */}



        <Stack direction="row" spacing={5}>
          <SocialLogin src={iconPath.google} alt="google Icon" variant="button" children="Google"/>
          <SocialLogin src={iconPath.stripe} alt="stripe Icon" variant="button" children="Stripe"/>
          <SocialLogin src={iconPath.xero} alt="xero Icon" variant="button" children="Xero"/>
        </Stack>

        </Box>
    </ThemeProvider>
  );
}