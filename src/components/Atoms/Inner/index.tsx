import * as React from 'react';
import { ComponentPropTypes } from '~/types';
import { StyledInner } from './styles';

type InnerProps = ComponentPropTypes;

const Inner: React.FC<InnerProps> = props => {
  return (
    <StyledInner className={props.className || ''}>
      {props.children}
    </StyledInner>
  );
};

export default Inner;
