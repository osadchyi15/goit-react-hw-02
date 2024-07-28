import { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("feedbacks")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  //   {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  let positiveFeedback = 0;
  totalFeedback === 0
    ? (positiveFeedback = 0)
    : (positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100));

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetState = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetState={resetState}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
