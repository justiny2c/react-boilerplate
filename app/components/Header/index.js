import React from 'react';
// import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.png';

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <h3>Home</h3>
        </HeaderLink>
        <HeaderLink to="/add">
          <h3>Add Todo</h3>
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
