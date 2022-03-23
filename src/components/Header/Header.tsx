import React from 'react';
import { StyledHeader, Root, StyledLink } from './Header.styles';

function Header() {
  return (
    <StyledHeader>
      <Root>
        <StyledLink to="/">О приложении</StyledLink>
        <StyledLink to="/quotes">Котировки</StyledLink>
      </Root>
    </StyledHeader>
  );
}

export default Header;
