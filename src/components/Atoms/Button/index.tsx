import * as React from 'react';
import { StyledButton } from './styles';
import { ComponentPropTypes } from '~/types';

type ButtonProps = ComponentPropTypes & {
  ariaLabel?: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton
      aria-label={props.ariaLabel || ''}
      className={props.className || ''}
      onClick={props.handleClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
