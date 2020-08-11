import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import makeRoute from 'Utils/makeRoute';
import Home from 'Views/pages/home';
import About from 'Views/pages/about';
import AboutMe from 'Views/pages/AboutMe';
import Contact from 'Views/pages/contact';

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About,
    children: [
      {
        path: 'me',
        component: AboutMe,
        children: [
          {
            path: 'contact',
            component: Contact
          }
        ]
      },
      {
        path: 'company/:location',
        children: [],
        component: (props) => <div>Company {props.match.params.location}</div>
      }
    ]
  }
];

/**
 * Make Routes.
 * Routes passed must be the most outside route or those that don't have parent.
 *
 * @param props
 */
function Routes(props) {
  return (
    <Switch>
      {routes.map((route) => makeRoute(route))}
      {props.children}
    </Switch>
  );
}

Routes.propTypes = {
  children: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.node), PropTypes.node)
};
export default Routes;
