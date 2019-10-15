import styled from 'styled-components';
import { SITE_COLOR } from '~/styles/valiables';
import LevelSelector from '../LevelSelector';

/**
 * Wrapper
 */
export const StyledTextAreaNav = styled.div`
  align-items: center;
  display: flex;
  border-style: solid;
  border-color: ${SITE_COLOR.BORDER_COLOR};
  border-width: 1px 1px 0 1px;
  padding: 15px 20px;
  width: 100%;
  justify-content: center;
`;

/**
 * Select
 */
export const StyledLevelSelector = styled(LevelSelector)`
  text-align: center;
`;
