import * as React from 'react';
import { StyledMain, StyledInner } from './styles';
import { ComponentPropTypes } from '~/types';

type PageWrapperType = ComponentPropTypes;

const PageWrapper: React.FC<PageWrapperType> = props => {
  return (
    <StyledMain>
      <StyledInner className={props.className || ''}>
        {props.children}
      </StyledInner>
    </StyledMain>
  );
};

export default PageWrapper;
