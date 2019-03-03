import React from 'react';
import { Link } from 'gatsby';
import pn from '../img/pn.svg';
import sunkware from '../img/sunkware.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Home">
          <img src={pn} alt="PunkNaturalism" style={{ width: '34px' }} />
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
