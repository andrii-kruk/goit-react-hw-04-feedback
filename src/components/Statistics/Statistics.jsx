import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const {
      statistics_wrapper,
      statistics_title,
      statistics_information,
      statistics_item,
      statistics_item__description,
    } = css;

    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={statistics_wrapper}>
        <h2 className={statistics_title}>Statistics</h2>

        <ul className={statistics_information}>
          <li className={statistics_item}>
            <p className={statistics_item__description}>Good: {good} </p>
          </li>
          <li className={statistics_item}>
            <p className={statistics_item__description}>Neutral: {neutral}</p>
          </li>
          <li className={statistics_item}>
            <p className={statistics_item__description}>Bad: {bad} </p>
          </li>
          <li className={statistics_item}>
            <p className={statistics_item__description}>Total: {total}</p>
          </li>
          <li className={statistics_item}>
            <p className={statistics_item__description}>
              Positive feedback:
              {positivePercentage}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
