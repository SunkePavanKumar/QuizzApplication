import React, { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizProps {
  questions: Question[];
}

const QuestionCard: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setcurrentQuestion] = useState(0);

  function handleAnswers(answer: string) {
    console.log("The selected answer is ", answer);
    setcurrentQuestion((prev) => prev + 1);
  }
  if (currentQuestion >= questions.length) return <h1>Quiz Completed</h1>;
  const currentQuestionData = questions[currentQuestion];

  return (
    <>
      <h2>{currentQuestionData.question}</h2>
      <ul>
        {[
          currentQuestionData.correct_answer,
          ...currentQuestionData.incorrect_answers,
        ]
          .sort()
          .map((answer) => (
            <li key={answer}>
              <button onClick={() => handleAnswers(answer)}>{answer}</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default QuestionCard;
