import styled from 'styled-components';
import { StringCounterProps } from '.';

/**
 * Wrapper
 */
export const StyledStringCounter = styled.p<{ isMax: boolean }>`
  background-color: #fff;
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 0.2em;
  ${props => props.isMax && 'color: #B6381C;'}
`;
