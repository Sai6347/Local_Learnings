import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';  
import TypographyAtom from './index'; 

describe('<TypographyAtom />', () => {
    it('renders with default variant and color', () => {
        const { getByText } = render(
            <TypographyAtom variant="body1">Test Text</TypographyAtom>
        );
        const textElement = getByText('Test Text');
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("P");
    });

    it('renders with specified variant and color', () => {
        const { getByText } = render(
            <TypographyAtom variant="heading3" color="primary">Heading Text</TypographyAtom>
        );
        const textElement = getByText('Heading Text');
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("SPAN");
        expect(textElement).toHaveStyle({ color: 'rgb(25, 118, 210)' }); 
    });

    it('renders with custom variant not in MUI', () => {
        const { getByText } = render(
            <TypographyAtom variant="title">Custom Variant Text</TypographyAtom>
        );
        const textElement = getByText('Custom Variant Text');
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("SPAN");
    });
});
