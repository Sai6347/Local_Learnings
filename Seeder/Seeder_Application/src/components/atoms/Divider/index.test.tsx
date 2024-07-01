import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import DividerAtom from "./index";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";

describe('<DividerAtom />', () => {
    
    it('render horizontal divider with default styles and props', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <DividerAtom orientation="horizontal"/>
            </ThemeProvider>
        );
        const dividerElement = container.firstChild as HTMLElement;
    
        expect(dividerElement).toBeInTheDocument();
        expect(dividerElement).toHaveStyle(`borderColor: ${theme.palette?.Borders.highEmphasis}`); 
        expect(dividerElement).toHaveStyle(`color: ${theme.palette.text?.mediumEmphasis}`); 
        expect(dividerElement).toHaveStyle('borderBottomWidth: undefined');
        expect(dividerElement).toHaveStyle('height: undefined');
    });

    it('render horizontal divider with full width', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <DividerAtom orientation="horizontal" variant="fullWidth" />
            </ThemeProvider>
        );
        const dividerElement = container.firstChild as HTMLElement;
    
        expect(dividerElement).toBeInTheDocument();
        expect(dividerElement).toHaveStyle(`borderColor: ${theme.palette?.Borders.highEmphasis}`); 
        expect(dividerElement).toHaveStyle(`color: ${theme.palette.text?.mediumEmphasis}`); 
        expect(dividerElement).toHaveStyle('borderBottomWidth: undefined');
        expect(dividerElement).toHaveStyle('height: undefined');
    });

    it('render horizontal divider with inset and borderBottomWidth', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <DividerAtom orientation="horizontal" color="#FFFFFF" variant="inset" borderBottomWidth="3px"/>
            </ThemeProvider>
        );
        const dividerElement = container.firstChild as HTMLElement;
    
        expect(dividerElement).toBeInTheDocument();
        expect(dividerElement).toHaveStyle(`borderColor: ${theme.palette?.Borders.highEmphasis}`); 
        expect(dividerElement).toHaveStyle(`color: ${theme.palette.text?.mediumEmphasis}`); 
        expect(dividerElement).toHaveStyle('borderBottomWidth: 3px');
        expect(dividerElement).toHaveStyle('height: undefined');
    });

    
    it('render vertical divider with height', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <DividerAtom orientation="horizontal" variant="inset" height="50px"/>
            </ThemeProvider>
        );
        const dividerElement = container.firstChild as HTMLElement;
    
        expect(dividerElement).toBeInTheDocument();
        expect(dividerElement).toHaveStyle(`borderColor: ${theme.palette?.Borders.highEmphasis}`); 
        expect(dividerElement).toHaveStyle(`color: ${theme.palette.text?.mediumEmphasis}`); 
        expect(dividerElement).toHaveStyle('borderBottomWidth: undefined');
        expect(dividerElement).toHaveStyle('height: 50px');
    });

    it('renders with children', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <DividerAtom>
                    <span>Test Child</span>
                </DividerAtom>
            </ThemeProvider>
        );
    
        expect(getByText('Test Child')).toBeInTheDocument();
    });


});

