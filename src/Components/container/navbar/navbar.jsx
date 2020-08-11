import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Navbar.
 */
function Navbar() {
  return (
    <div>
      <NavLink to="/" activeClassName={React}>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/about/me">About Me</NavLink>
      <NavLink to="/about/me/contact">Contact</NavLink>
      <NavLink to="/about/company">Contact</NavLink>
    </div>
  );
}

export default Navbar;
