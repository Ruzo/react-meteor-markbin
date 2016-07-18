import React from 'react';
import Accounts from './accounts'
const navbarOverflow = {overflow: 'visible'};

const Header = () => {
  return (
    <nav className="nav navbar-default">
      <div className="navbar-header"><a className="navbar-brand">MarkBin</a></div>
      <ul className="nav navbar-nav">
        <li className="nav-item"><a>Create Bin</a></li>
        <li className="nav-item"><Accounts /></li>
      </ul>
    </nav>
  );
};

export default Header;