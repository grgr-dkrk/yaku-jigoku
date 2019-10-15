import styled from 'styled-components';
import Inner from '~/components/Atoms/Inner';

/**
 * Wrapper
 */
export const StyledMain = styled.main`
  padding: 0 20px;
`;

/**
 * Inner
 */
export const StyledInner = styled(Inner)`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
