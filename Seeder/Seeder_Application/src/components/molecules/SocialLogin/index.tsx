import { Card, Stack, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { TypographyAtom } from "../../atoms/Typography";


export interface LoginProps {
    src: string;
    alt: string;
    variant: TypographyProps['variant'];
    children: string;
    id?: string;
}


const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: '130px',
    height: '96px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: '12px',
    backgroundColor: theme.palette.background.elevation1,

}));

const StyledImgDiv = styled(Stack)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

const StyledImage = styled('img')(({theme}) => ({
    width: '100%',
    maxWidth: '20px',
    height: 'auto'
}));


export const SocialLogin: React.FC<LoginProps> = ({ src, alt, variant, id, children}) => {

    return(

        <StyledCard data-testid={id}>
            <Stack spacing={2}>
                <StyledImgDiv>
                    <StyledImage src={src} alt={alt} />
                </StyledImgDiv>
                <TypographyAtom variant={variant} children={children}/>
            </Stack>
        </StyledCard>
    );
};