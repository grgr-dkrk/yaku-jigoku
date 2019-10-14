import styled from 'styled-components';
import { SITE_COLOR } from '../../../styles/valiables';

export const StyledTextAreaWrap = styled.label``;

export const StyledTextArea = styled.textarea`
  border: 1px solid ${SITE_COLOR.BORDER_COLOR};
  display: block;
  font-size: 1.7rem;
  padding: 0.5em;
  width: 100%;
  resize: none;
`;
