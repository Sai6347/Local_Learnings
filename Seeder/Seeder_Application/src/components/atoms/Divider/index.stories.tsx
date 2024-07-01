import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DividerAtom, DividerProps } from './index';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme';


export default {
  title: 'Atoms/DividerAtom',
  component: DividerAtom,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['fullWidth', 'inset', 'middle'],
      },
    },
    color: {
      control: 'color'
    },
    textAlign: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    borderBottomWidth: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<DividerProps> = (args) => (
    <ThemeProvider theme={theme}>
      <DividerAtom {...args} />
    </ThemeProvider>
);

export const HorizontalDivider = Template.bind({});
HorizontalDivider.args = {
  orientation: 'horizontal',
  variant: 'fullWidth',
  borderBottomWidth: '2px',
  height: '20px',
};

export const DividerwithText = Template.bind({});
DividerwithText.args = {
  orientation: 'horizontal',
  variant: 'fullWidth',
  borderBottomWidth: '2px',
  height: '20px',
  children: <div>Check</div>
};

export const VerticalDivider = Template.bind({});
VerticalDivider.args = {
  orientation: 'vertical',
  variant: 'inset',
  height: '50px',
};
