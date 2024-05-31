import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting timeout")
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log("Setting Interval")
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
};

export default QuestionTimer;
