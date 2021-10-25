import React from 'react';
import { Root, StyledLink } from './Header.styles';

function Header() {
  return (
    <Root>
      <StyledLink to='/about'>О приложении</StyledLink>
      <StyledLink to='/quotes'>Котировки</StyledLink>
    </Root>
  )
}

export default Header;
