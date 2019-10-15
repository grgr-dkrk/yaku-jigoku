import styled from 'styled-components';
import TextArea from '~/components/Atoms/TextArea';
import Button from '~/components/Atoms/Button';
import { BREAKPOINT } from '~/styles/valiables';

/**
 * Wrapper
 */
export const StyledTextAreaBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${BREAKPOINT.MID} {
    flex-direction: column;
  }
`;

/**
 * TextArea
 */
export const StyledTextArea = styled(TextArea)`
  width: 50%;
  ${BREAKPOINT.MID} {
    width: 100%;
  }
  textarea {
    padding-right: 1em;
    min-height: 300px;
    ${BREAKPOINT.MID} {
      min-height: 150px;
    }
  }
  &:nth-of-type(1) textarea {
    ${BREAKPOINT.MID_MIN} {
      border-right-width: 0;
    }
    ${BREAKPOINT.MID} {
      border-bottom-width: 0;
    }
  }
`;

/**
 * Button
 */
export const StyledButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
`;
