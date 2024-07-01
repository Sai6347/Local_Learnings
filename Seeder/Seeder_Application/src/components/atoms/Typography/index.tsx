import React from "react";
import { Typography, TypographyProps } from "@mui/material";


export interface TypoProps {
    variant: TypographyProps['variant'] | 'title' | 'heading2' | 'heading3',
    color?: string;
    children: React.ReactNode;
    id?: string;
}



export const TypographyAtom: React.FC<TypoProps> = ({ variant, color, id, children }) => {
    return(
        <Typography 
            variant={variant} 
            color={color}
            data-testid={id}
        >
            { children }
        </Typography>
    )
} 