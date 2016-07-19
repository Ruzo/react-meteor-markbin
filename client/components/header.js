import React from 'react';
import {Link} from 'react-router';
import Accounts from './accounts';

const navbarOverflow = {overflow: 'visible'};

const Header = ({binsInsert}) => {
  return (
    <nav className="nav navbar-default">
      <div className="navbar-header"><Link to="/" className="navbar-brand">MarkBin</Link></div>
      <ul className="nav navbar-nav">
        <li className="nav-item"><a href='#' onClick={binsInsert.bind(this)}>Create Bin</a></li>
        <li className="nav-item"><Accounts /></li>
      </ul>
    </nav>
  );
};

export default Header;