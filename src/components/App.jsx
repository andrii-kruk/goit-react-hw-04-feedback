import { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { countTotalFeedback, countPositiveFeedbackPercentage } from 'utils';

import css from './App.module.css';
const { feedback_section, feedback_wrapper, feedback_title, notification } =
  css;

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = buttonName => {
    switch (buttonName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const feedbacks = { good, neutral, bad };

  const totalFeedbacks = countTotalFeedback(feedbacks);

  return (
    <section className={feedback_section}>
      <div className={feedback_wrapper}>
        <h1 className={feedback_title}>Leave your feedback</h1>

        <FeedbackOptions
          keys={Object.keys(feedbacks)}
          onLeaveFeedback={onLeaveFeedback}
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
};
