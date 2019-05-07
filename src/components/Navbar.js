import React from 'react';
import { Link } from 'gatsby';
import pn from '../img/pn.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
    <div className="column is-10 is-offset-1">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Home">
          <img src={pn} alt="PunkNaturalism" style={{ width: '34px' }} />
        </Link>
      </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
