import * as React from 'react';
import { StyledHeadingLv1, StyledHeadingLv2, StyledHeadingLv3 } from './styles';
import { ComponentPropTypes } from '~/types';

type HeadingProps = ComponentPropTypes & {
  level?: number;
};

const Heading: React.FC<HeadingProps> = props => {
  switch (props.level) {
    case 1:
      return (
        <StyledHeadingLv1 className={props.className || ''}>
          {props.children}
        </StyledHeadingLv1>
      );
    case 2:
      return (
        <StyledHeadingLv2 className={props.className || ''}>
          {props.children}
        </StyledHeadingLv2>
      );
    case 3:
      return (
        <StyledHeadingLv3 className={props.className || ''}>
          {props.children}
        </StyledHeadingLv3>
      );
    default:
      return (
        <StyledHeadingLv2 className={props.className || ''}>
          {props.children}
        </StyledHeadingLv2>
      );
  }
};

export default Heading;
