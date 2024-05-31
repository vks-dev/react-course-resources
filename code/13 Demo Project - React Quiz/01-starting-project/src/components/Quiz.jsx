import React, { useState, useCallback } from "react";
import DUMMY_QUESTIONS from "../questions";
import QuizCompleted from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === DUMMY_QUESTIONS.length;

  function handleSelectAnswer(answer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  }

  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={QuizCompleted} />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  const shuffledAnswers = [
    ...DUMMY_QUESTIONS[activeQuestionIndex].answers,
  ].sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeOut={() => handleSelectAnswer(null)}
        />
        <h2>{DUMMY_QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
