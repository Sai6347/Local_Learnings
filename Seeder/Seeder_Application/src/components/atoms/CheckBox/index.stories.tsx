import React from 'react';
import { Meta } from '@storybook/react';
import CheckBoxComponent from '../../atoms/CheckBox/index'; 
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme/index' 

export default {
  title: 'Components/CheckBoxComponent',
  component: CheckBoxComponent,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

export const Default = () => <CheckBoxComponent checked={false} onChange={() => {}} />;

export const Checked = () => <CheckBoxComponent checked={true} onChange={() => {}} />;

export const Indeterminate = () => <CheckBoxComponent indeterminate={true} onChange={() => {}} />;
