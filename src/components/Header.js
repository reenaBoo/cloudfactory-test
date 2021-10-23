import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to='/about' className="header__link">О приложении</Link>
      <Link to='/quotes' className="header__link">Котировки</Link>
    </header>
  )
}

export default Header;