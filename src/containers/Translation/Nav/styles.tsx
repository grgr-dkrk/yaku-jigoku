import styled from 'styled-components';
import { SITE_COLOR } from '~/styles/valiables';
import Select from '~/components/Atoms/Select';

/**
 * Wrapper
 */
export const StyledTextAreaNav = styled.div`
  align-items: center;
  display: flex;
  border-style: solid;
  border-color: ${SITE_COLOR.BORDER_COLOR};
  border-width: 1px 1px 0 1px;
  padding: 10px 20px;
  width: 100%;
`;

/**
 * Select
 */
export const StyledSelectNav = styled(Select)``;
