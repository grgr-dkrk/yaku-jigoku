import * as React from 'react';
import { StyledButton } from './styles';
import { ComponentPropTypes } from '~/types';

type ButtonProps = ComponentPropTypes & {
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton className={props.className || ''} onClick={props.handleClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
