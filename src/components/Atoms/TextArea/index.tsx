import * as React from 'react';
import { StyledTextArea, StyledTextAreaWrap } from './styles';
import { ComponentPropTypes } from '~/types';
import { CONSTANTS } from '~/constants';

type TextAreaProps = ComponentPropTypes & {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  disabled?: boolean;
  placeholder?: string;
};

const TextArea: React.FC<TextAreaProps> = props => {
  return (
    <StyledTextAreaWrap className={props.className || ''}>
      {props.children}
      <StyledTextArea
        onChange={props.handleChange}
        defaultValue={props.value}
        readOnly={props.disabled}
        placeholder={props.placeholder || ''}
        maxLength={CONSTANTS.NUM_MAX_TEXT}
      ></StyledTextArea>
    </StyledTextAreaWrap>
  );
};

export default TextArea;
