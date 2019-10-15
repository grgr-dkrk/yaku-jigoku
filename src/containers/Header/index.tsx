import * as React from 'react';
import { StyledHeader, StyledHeaderHeading } from './styles';
import { ComponentPropTypes } from '~/types';
import { LABELS } from '~/constants';

type HeaderProps = ComponentPropTypes & {};

const Header: React.FC<HeaderProps> = props => {
  return (
    <StyledHeader className={props.className || ''}>
      <StyledHeaderHeading>
        YAKU † ZIGOQ <br />
        〜怒りの高速翻訳野郎〜
      </StyledHeaderHeading>
    </StyledHeader>
  );
};

export default Header;
