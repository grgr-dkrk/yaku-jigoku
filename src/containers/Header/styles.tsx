import styled from 'styled-components';
import Heading from '~/components/Atoms/Heading';
import { BREAKPOINT } from '~/styles/valiables';

export const StyledHeader = styled.header`
  color: #fff;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 20px;
  ${BREAKPOINT.MID_MIN} {
    br {
      display: none;
    }
  }
  ${BREAKPOINT.MID} {
    margin-bottom: 0;
  }
`;

export const StyledHeaderHeading = styled(Heading)``;
