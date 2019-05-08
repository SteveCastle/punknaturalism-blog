import React from 'react';
import { Link } from 'gatsby';
import pn from '../img/pn.svg';
import gallery from '../img/gallery.svg';
import sunkware from '../img/sunkware.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
    <div className="column is-10 is-offset-1">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Home">
          <img src={pn} alt="PunkNaturalism" style={{ width: '34px' }} />
        </Link>
        <Link to="/gallery" className="navbar-item" title="Gallery">
          <img src={gallery} alt="Photo gallery" style={{ width: '34px' }} />
        </Link>
        <a href="https://sunkware.com" className="navbar-item" title="Sunkware">
          <img src={sunkware} alt="SunkWare: A Tech Blog" style={{ width: '34px' }} />
        </a>
      </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
