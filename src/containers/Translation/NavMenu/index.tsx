import * as React from 'react';
import { StyledTextAreaNav, StyledLevelSelector } from './styles';
import { ComponentPropTypes } from '~/types';

type MainProps = ComponentPropTypes & {};

const TranslationArea: React.FC<MainProps> = props => {
  return (
    <StyledTextAreaNav className={props.className || ''}>
      <StyledLevelSelector />
    </StyledTextAreaNav>
  );
};

export default TranslationArea;
