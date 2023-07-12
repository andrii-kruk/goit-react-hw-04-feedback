import React from 'react';
import PropTypes from 'prop-types';

import { toFirstLetterUpperCase } from 'utils';
import css from './FeedbackButton.module.css';

export const Button = ({ onLeaveFeedback, buttonName }) => {
  const { feedback_option, option_button } = css;

  return (
    <li className={feedback_option} key={buttonName}>
      <button
        type="button"
        className={option_button}
        onClick={onLeaveFeedback}
        name={buttonName}
      >
        {toFirstLetterUpperCase(buttonName)}
      </button>
    </li>
  );
};

Button.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};
