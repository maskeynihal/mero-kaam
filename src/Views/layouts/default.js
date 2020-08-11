import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'Components/container/navbar';
/**
 * Default Layout.
 *
 * @param {Object} props
 */
function DefaultLayout(props) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content__container">{props.children}</div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType(PropTypes.arrayOf(PropTypes.node), PropTypes.node)
};

export default DefaultLayout;
