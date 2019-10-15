import styled from 'styled-components';
import Button from '~/components/Atoms/Button';

/**
 * Button
 */
export const StyledButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 2.6rem;
  width: 18px;
  height: 18px;
  &:before,
  &:after {
    background-color: #000;
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0;
    left: 10px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
