import styled from 'styled-components';
import TextArea from '~/components/Atoms/TextArea';

/**
 * Wrapper
 */
export const StyledTextAreaBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledTextArea = styled(TextArea)`
  width: 50%;
  textarea {
    min-height: 300px;
  }
  &:nth-of-type(1) textarea {
    border-right-width: 0;
  }
`;
