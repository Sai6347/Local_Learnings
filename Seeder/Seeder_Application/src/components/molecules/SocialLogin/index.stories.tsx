import React from "react";
import { LoginProps, SocialLogin } from "./index";
import { Meta, StoryFn } from "@storybook/react/*";

import iconPath from "../../../utils/Constants"; 
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";

const googleLogo = iconPath.google;
const stripeLogo = iconPath.stripe;
const xeroLogo = iconPath.xero;

export default {
    title: 'Molecules/SocialLogin',
    Component: SocialLogin,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'heading2', 'heading3', 'title', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'],
            },
        },
        color: {
            control: 'color',
        }
    },
} as Meta;

const Template: StoryFn<LoginProps> = (args) =>( 
    // <SocialLogin {...args} />
    <ThemeProvider theme={theme}>
      <SocialLogin {...args} />
    </ThemeProvider>

);

export const GoogleLogin = Template.bind({});
GoogleLogin.args = {
    src: googleLogo,
    alt: 'Google Logo',
    variant: 'button',
    children: 'Google Login' 
}

export const StripeLogin = Template.bind({});
StripeLogin.args = {
    src: stripeLogo,
    alt: 'Stripe Logo',
    variant: 'subtitle2',
    children: 'Stripe Login' 
}

export const XeroLogin = Template.bind({});
XeroLogin.args = {
    src: xeroLogo,
    alt: 'Xero Logo',
    variant: 'caption',
    children: 'Xero Login' 
}