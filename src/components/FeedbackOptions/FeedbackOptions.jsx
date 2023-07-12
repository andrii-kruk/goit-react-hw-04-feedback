import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';
import { Button } from './FeedbackButton/FeedbackButton';

export class FeedbackOptions extends Component {
  render() {
    const { keys, onLeaveFeedback } = this.props;

    const { feedback_options } = css;

    return (
      <ul className={feedback_options}>
        {keys.map(buttonName => (
          <Button
            key={buttonName}
            onLeaveFeedback={() => onLeaveFeedback(buttonName)}
            buttonName={buttonName}
          />
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
