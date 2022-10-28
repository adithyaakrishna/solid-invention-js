import React from 'react';
import Button from '@mui/material/Button';

export const BasicButton = (props) => {
  return (
    <Button className={props.className} variant={props.variant} startIcon={props.startIcon} endIcon={props.endIcon} color={props.color} onClick={props.onClick} disabled={props.isDisabled}>{props.buttonText}</Button>
  );
}
