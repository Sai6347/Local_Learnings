import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface TypoProps {
    variant: TypographyProps['variant'] | 'title' | 'heading2' | 'heading3',
    color?: string;
    children: React.ReactNode;
}


const TypographyAtom: React.FC<TypoProps> = ({ variant, color, children }) => {
    return(
        <Typography variant={variant} color={color}>{ children }</Typography>
    )
} 

export default TypographyAtom;