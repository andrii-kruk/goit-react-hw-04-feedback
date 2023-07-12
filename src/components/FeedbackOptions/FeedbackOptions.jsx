import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './FeedbackButton/FeedbackButton';

import css from './FeedbackOptions.module.css';
const { feedback_options } = css;

export const FeedbackOptions = ({ keys, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
