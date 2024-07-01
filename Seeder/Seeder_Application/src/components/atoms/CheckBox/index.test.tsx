import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CheckBoxComponent from '../../atoms/CheckBox/index';
import theme from '../../../theme/index';
import { ThemeProvider } from '@emotion/react';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('CheckBoxComponent', () => {
  it('should render unchecked checkbox', () => {
    renderWithTheme(<CheckBoxComponent checked={false} onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('should render checked checkbox', () => {
    renderWithTheme(<CheckBoxComponent checked onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('should render triggers onChange handler', () => {
    const handleChange = jest.fn();
    renderWithTheme(<CheckBoxComponent checked={false} onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('should render indeterminate checkbox', () => {
    renderWithTheme(<CheckBoxComponent indeterminate onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(false);
  });
});
