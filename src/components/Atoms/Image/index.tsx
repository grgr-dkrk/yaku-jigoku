import * as React from 'react';
import { StyledFigure, StyledImage, StyledCaption } from './styles';
import { ComponentPropTypes } from '~/types';

type ImageProps = ComponentPropTypes & {
  src: string;
  Translation: string;
};

const Image: React.FC<ImageProps> = props => {
  return (
    <StyledFigure className={props.className || ''}>
      <StyledCaption>{props.children}</StyledCaption>
      <StyledImage src={props.src} alt="" />
    </StyledFigure>
  );
};

export default Image;
