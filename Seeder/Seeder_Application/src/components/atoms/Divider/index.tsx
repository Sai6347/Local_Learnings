import { Divider, SxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
// import theme from "../../../theme";

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    variant?: "fullWidth" | "inset" | "middle";
    color?: string;
    sx?: SxProps;
    children?: React.ReactNode;
    textAlign?: "left" | "right";
    borderBottomWidth?: string;
    height?: string;
}

const StyledDivider = styled(Divider, {
    shouldForwardProp: (prop) => prop !== "borderBottomWidth" && prop !== "height",
    })<DividerProps>(({ theme, borderBottomWidth, height }) => ({
    borderColor: theme.palette?.Borders.highEmphasis,
    color: theme.palette.text?.mediumEmphasis,
    borderBottomWidth: borderBottomWidth ?? undefined,
    height: height ?? undefined,
    "&::before, &::after": {
        width: "100%",
        borderTop: "thin solid #413F4D",
    },
}));


const DividerAtom: React.FC<DividerProps> = ({ orientation, variant, sx, children, textAlign, borderBottomWidth, height }) => {
   

    return (
            <StyledDivider
                orientation={orientation}
                variant={variant}
                textAlign={textAlign}
                sx={sx}
                borderBottomWidth = {borderBottomWidth}
                height= {height}
            >
                {children}
            </StyledDivider>
    );
}

export default DividerAtom;