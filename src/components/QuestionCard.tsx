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
  const [score, setScore] = useState(0);
  const [showResponse, setShowResponse] = useState(false);

  function handleAnswers(answer: string, currentQuestionData: any) {
    const correctAnswer = currentQuestionData.correct_answer;
    if (correctAnswer === answer) {
      console.log("Your answer is correct");
      setScore((prev) => prev + 1);
    } else {
      console.log("your answer is wrong");
    }
    console.log("The selected answer is ", answer);

    setcurrentQuestion((prev) => prev + 1);
  }

  function startTheQuiz() {
    setcurrentQuestion(0);
    setScore(0);
  }

  function showResponses() {
    setShowResponse(true);
  }
  if (currentQuestion >= questions.length)
    return (
      <>
        <div className="flex text-center justify-center">
          <h1 className=" mt-3  text-gray-600 text-center border-gray-300 border-2  w-36 px-1 py-2 rounded-xl bg-green-300">
            Quiz Completed
          </h1>
          <h1 className=" mt-3  text-gray-600 text-center border-gray-300 border-2  w-36 px-1 py-2 rounded-xl bg-green-300">
            Your Score : {score}
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <h1
            className=" mt-3  text-gray-600 text-center border-gray-300 border-2  w-36 px-1 py-2 rounded-xl bg-green-300 cursor-pointer hover:bg-green-500"
            onClick={startTheQuiz}
          >
            Try Again
          </h1>
          <h1
            className=" mt-3  text-gray-600 text-center border-gray-300 border-2  w-36 px-1 py-2 rounded-xl bg-green-300 cursor-pointer hover:bg-green-500"
            onClick={showResponses}
          >
            showAnswers
          </h1>
        </div>

        {showResponse ? (
          <>
            {questions.map((questionData, index) => (
              <>
                <h2 className=" font-sans font-semibold mb-4">
                  {`${index + 1} . ${questionData.question}`}
                </h2>
                <ul>
                  {[
                    questionData.correct_answer,
                    ...questionData.incorrect_answers,
                  ]
                    .sort()
                    .map((answer) => (
                      <li key={answer}>
                        <button
                          className={`border-blue-600 border-2 p-1 mb-2 rounded-full hover:bg-blue-300 w-52 ml-5 ${
                            answer === questionData.correct_answer
                              ? " bg-green-700"
                              : "bg-red-600"
                          }`}
                        >
                          {answer}
                        </button>
                      </li>
                    ))}
                </ul>
              </>
            ))}
          </>
        ) : (
          ""
        )}
      </>
    );
  const currentQuestionData = questions[currentQuestion];

  return (
    <>
      <h2 className=" font-sans font-semibold mb-4">
        {`${currentQuestion + 1} . ${currentQuestionData.question}`}
      </h2>
      <ul>
        {[
          currentQuestionData.correct_answer,
          ...currentQuestionData.incorrect_answers,
        ]
          .sort()
          .map((answer) => (
            <li key={answer}>
              <button
                className={`border-blue-600 border-2 p-1 mb-2 rounded-full hover:bg-blue-300 w-52 ml-5`}
                onClick={() => handleAnswers(answer, currentQuestionData)}
              >
                {answer}
              </button>
            </li>
          ))}
      </ul>

      <p className=" text-end text-2xl font-sans text-blue-700">
        score : {score}
      </p>
    </>
  );
};

export default QuestionCard;
