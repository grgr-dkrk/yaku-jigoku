import * as React from 'react';
import { StyledTextArea, StyledTextAreaWrap } from './styles';
import { ComponentPropTypes } from '~/types';

type TextAreaProps = ComponentPropTypes & {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  disabled?: boolean;
  placeholder?: string;
};

const TextArea: React.FC<TextAreaProps> = props => {
  return (
    <StyledTextAreaWrap className={props.className || ''}>
      <StyledTextArea
        onChange={props.handleChange}
        defaultValue={props.value}
        readOnly={props.disabled}
        placeholder={props.placeholder || ''}
      >
        {props.children}
      </StyledTextArea>
    </StyledTextAreaWrap>
  );
};

export default TextArea;
