import * as React from 'react';
import { StyledSelect, StyledSelectWrap } from './styles';
import { ComponentPropTypes } from '~/types';

type InputProps = ComponentPropTypes & {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
};

const Select: React.FC<InputProps> = props => {
  return (
    <StyledSelectWrap className={props.className || ''}>
      {props.children}
      <StyledSelect onChange={props.handleChange}>
        {props.options &&
          props.options.map(option => <option key={option}>{option}</option>)}
      </StyledSelect>
    </StyledSelectWrap>
  );
};

export default Select;
