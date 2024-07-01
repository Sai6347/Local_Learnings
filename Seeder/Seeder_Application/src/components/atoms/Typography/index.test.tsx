import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  
import { TypographyAtom } from './index'; 

describe('<TypographyAtom />', () => {
    
    it('should render with default variant and color', () => {
        render(
            <TypographyAtom variant="body1" id="typography">Test Text</TypographyAtom>
        );
        
        const textElement = screen.getByTestId('typography');
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("P");
    });

    it('should render with specified variant and color', () => {
        render(
            <TypographyAtom variant="heading3" id="typography" color="primary">Heading Text</TypographyAtom>
        );
        const textElement = screen.getByTestId('typography');
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("SPAN");
        expect(textElement).toHaveStyle({ color: 'rgb(25, 118, 210)' }); 
    });

    it('should render with custom variant not in MUI', () => {
        render(
            <TypographyAtom  id="typography" variant="title">Custom Variant Text</TypographyAtom>
        );
        const textElement = screen.getByTestId('typography');
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("SPAN");
    });
});
