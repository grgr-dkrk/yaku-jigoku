import * as React from 'react';
import {
  StyledTranslationNav,
  StyledTranslationArea,
  StyledPageWrapper,
} from './styles';
import { ComponentPropTypes } from '~/types';

type MainProps = ComponentPropTypes & {};

const Main: React.FC<MainProps> = () => {
  return (
    <StyledPageWrapper>
      <StyledTranslationNav />
      <StyledTranslationArea />
    </StyledPageWrapper>
  );
};

export default Main;
