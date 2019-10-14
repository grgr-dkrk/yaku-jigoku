import * as React from 'react';
import { StyledInput, StyledInputWrap } from './styles';
import { ComponentPropTypes } from '~/types';

type InputProps = ComponentPropTypes & {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = props => {
  return (
    <StyledInputWrap className={props.className || ''}>
      {props.children}
      <StyledInput type="text" onChange={props.handleChange} />
    </StyledInputWrap>
  );
};

export default Input;
