import styled from 'styled-components';
import TranslationArea from '~/containers/Translation/Box';
import TranslationNav from '~/containers/Translation/Nav';
import Send from '~/containers/Translation/Send';
import PageWrapper from '~/containers/PageWrapper';

/**
 * Wrapper
 */
export const StyledPageWrapper = styled(PageWrapper)`
  box-shadow: 2px 2px 8px #fff;
`;

/**
 * TranslationArea
 */
export const StyledTranslationNav = styled(TranslationNav)`
  background-color: #fff;
`;

/**
 * TranslationArea
 */
export const StyledTranslationArea = styled(TranslationArea)`
  background-color: #fff;
`;

/**
 * Send
 */
export const StyledSend = styled(Send)``;
