import React from 'react';
import items from '../../assets/Navbar-Items';
import '../../style/navbar.css';

const Navbar = () => (
  <navbar className="navbar">
    <ul className="navbar__list">
      { items.map((item) => 
        <li className="navbar__list__item">
          { item }
        </li>
      ) }
    </ul>
  </navbar>
);

export default Navbar;
