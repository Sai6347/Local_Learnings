import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

interface StyledCheckboxProps {
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
}

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  borderRadius: 6,
  '&.Mui-checked': {
    color: theme.palette.primary.purple["400"],
  },
  color: theme.palette.Icon.lowEmphasis,
}));

const CheckBoxComponent: React.FC<StyledCheckboxProps> = ({ checked, onChange,indeterminate }) => {
  return <StyledCheckbox checked={checked} onChange={onChange}  icon={indeterminate && <IndeterminateCheckBoxOutlinedIcon/>} />;
};

export default CheckBoxComponent;