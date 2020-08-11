import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'logo.svg';
import { Card, Button, TextField, Avatar, Divider } from 'ui-neumorphism';
import { FiSearch } from 'react-icons/fi';
/**
 * Navbar.
 */
function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <Card className="navbar__container" flat>
          <div className="row-group">
            <FiSearch></FiSearch>
            <TextField placeholder="SEARCH" hideExtra={true} name="search"></TextField>
          </div>
          <div className="row-group">
            <Avatar src={logo}>NM</Avatar>
          </div>
        </Card>
      </div>
      <Divider dense></Divider>
    </React.Fragment>
  );
}

export default Navbar;
