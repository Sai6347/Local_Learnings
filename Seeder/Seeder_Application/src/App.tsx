import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import theme from "./theme";
import { DividerAtom } from "./components/atoms/Divider/index";
import { TypographyAtom } from "./components/atoms/Typography";
import  IconPath  from "./utils/Constants";
// import GoogleIcon from '../public/assets/images/google.svg';
import { SocialLogin } from "./components/molecules/SocialLogin";
import styled from "@emotion/styled";




const StyledStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', 
  alignItems: 'center',
  padding: '10px'

}));

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

        {/* <Typography variant="heading2" color="secondary"> Local Application </Typography> <br /> <br />   

        <DividerAtom orientation="horizontal" variant="fullWidth" borderBottomWidth="5px"/> */}

        <br />

        {/* <DividerAtom orientation="horizontal" variant="middle">Center</DividerAtom>
        <br />

        <DividerAtom orientation="horizontal" textAlign="right" variant="fullWidth">Right</DividerAtom>

        <br />

        <DividerAtom orientation="vertical" height="50px" sx={{ width:"15px"}}/> */}

        <br />
        
        <br />

        {/* <TypographyAtom
          variant="title" 
          color= {theme.palette.text.highEmphasis}
          children="Login to Seeder"/> 

        <br /> <br /> */}

        {/* <TypographyAtom 
          variant="heading3" 
          color= {theme.palette.text.lowEmphasis}
          children="Enter your mail id and password to login" /> <br /> <br /> */}


        
        {/* <img src={IconPath.developer} alt="devimage" style={{ width:'20%', height: 'auto'}}/> */}


        <TypographyAtom variant='heading2' children='Social Login' /> <br /> <br />
        <Stack direction="row" spacing={5}>
          <SocialLogin src={IconPath.google} alt="google Icon" variant="button" children="Google"/>
          {/* <SocialLogin src={IconPath.stripe} alt="stripe Icon" variant="button" children="Stripe"/>
          <SocialLogin src={IconPath.xero} alt="xero Icon" variant="button" children="Xero"/> */}

        </Stack>

        </Box>
    </ThemeProvider>
  );
}