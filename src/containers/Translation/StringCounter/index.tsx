import * as React from 'react';
import { ComponentPropTypes } from '~/types';
import { StyledStringCounter } from './styles';

export type StringCounterProps = ComponentPropTypes & {
  count: number;
  max: number;
};

const StringCounter: React.FC<StringCounterProps> = props => {
  return (
    <StyledStringCounter isMax={props.count >= props.max}>
      {props.count} / {props.max}
    </StyledStringCounter>
  );
};

export default StringCounter;
