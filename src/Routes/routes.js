import React from 'react';
// import { Route } from 'react-router-dom';
import Home from 'Views/pages/home';
import About from 'Views/pages/about';
import AboutMe from 'Views/pages/AboutMe';
import { Switch } from 'react-router-dom';
import makeRoute from 'Utils/makeRoute';
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
        // children: []
        component: (props) => <div>Company {props.match.params.location}</div>
      }
    ]
  }
];

/**
 * Make Routes.
 * Routes passed must be the most outside route or those that don't have parent.
 */
function Routes() {
  return <Switch>{routes.map((route) => makeRoute(route))}</Switch>;
}

export default Routes;
