import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';

import Routes from './Routes/routes';
/**
 * Main App.
 */
function App() {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Routes></Routes>
        </Switch>

        <NavLink to="/" activeClassName={React}>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/about/me">About Me</NavLink>
        <NavLink to="/about/me/contact">Contact</NavLink>
        <NavLink to="/about/company">Contact</NavLink>
      </Router>
    </div>
  );
}

export default App;
