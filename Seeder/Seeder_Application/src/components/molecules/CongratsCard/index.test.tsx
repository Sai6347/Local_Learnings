import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CongratsCard from '.';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';

describe('CongratsCard', () => {
  const defaultProps = {
    iconSrc: './assets/icons/Congrats.svg',
    heading: 'Congratulations! You are ready to start!',
    body: 'You are approved for funding. We are ready to advance you up to',
    buttonLabel: 'Learn More',
  };

  const renderComponent = (props = defaultProps) => {
    return render(
      <ThemeProvider theme={theme}>
        <CongratsCard {...props} />
      </ThemeProvider>
    );
  };

  test('should render CongratsCard correctly', () => {
    const { heading, body, buttonLabel, iconSrc } = defaultProps;
    renderComponent();
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(body)).toBeInTheDocument();
    const img = screen.getByAltText('Congrats Image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', iconSrc);
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });
});
