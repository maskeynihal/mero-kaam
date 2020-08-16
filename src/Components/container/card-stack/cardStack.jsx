import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'Components/common/card';
import { useModal } from 'Hooks';
/**
 * Has stack of card of the definite works.
 *
 * @param {Object} props
 */
function CardStack(props) {
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <div className="card-stack__title">{props.title.toUpperCase()}</div>
      <div className="card-group">
        <div className="card-group__item">
          <Card rounded={true} action={() => toggle('LargeCard', 100)}></Card>
        </div>
        <div className="card-group__item">
          <Card rounded={false}></Card>
        </div>
      </div>
    </div>
  );
}

CardStack.defaultProps = {
  title: 'Todo'
};

CardStack.propTypes = {
  title: PropTypes.string
};
export default CardStack;
