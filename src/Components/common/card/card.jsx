import React from 'react';
import PropTypes from 'prop-types';

import { Card as NeuCard, Button, Avatar } from 'ui-neumorphism';

/**
 * Card.
 */
function Card({ rounded, heading, dueDate, username }) {
  return (
    <React.Fragment>
      <NeuCard rounded={rounded}>
        <div className="card__container">
          <div className="card__heading">{heading}</div>
          <div className="card__due-date">
            <NeuCard inset rounded className="card__date">
              {dueDate}
            </NeuCard>
          </div>
          <div className="card__footer">
            <div className="card__action">
              <Button text color="var(--primary)">
                Details
              </Button>
              <Avatar>{username}</Avatar>
            </div>
          </div>
        </div>
      </NeuCard>
    </React.Fragment>
  );
}

Card.defaultProps = {
  rounded: false,
  heading: 'Complete React TODO',
  dueDate: Date.now(),
  username: 'NM'
};

Card.propTypes = {
  rounded: PropTypes.bool,
  heading: PropTypes.string,
  dueDate: PropTypes.string,
  username: PropTypes.string
};

export default Card;
