import React, { Component } from 'react';

import css from './App.module.css';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { countTotalFeedback, countPositiveFeedbackPercentage } from 'utils';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  render() {
    const { feedback_section, feedback_wrapper, feedback_title, notification } =
      css;

    const { good, neutral, bad } = this.state;

    const totalFeedbacks = countTotalFeedback(this.state);
    return (
      <section className={feedback_section}>
        <div className={feedback_wrapper}>
          <h1 className={feedback_title}>Leave your feedback</h1>

          <FeedbackOptions
            keys={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />

          {totalFeedbacks !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={countPositiveFeedbackPercentage(
                good,
                totalFeedbacks
              )}
            />
          ) : (
            <h2 className={notification}>There is no feedback</h2>
          )}
        </div>
      </section>
    );
  }
}
