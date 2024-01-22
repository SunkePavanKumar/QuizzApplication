import { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard.tsx";
import "./App.css";

function App() {
  const [quizData, setQuizData] = useState([]);
  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=19&type=multiple"
        );
        const data = await response.json();
        const results: [] = data.results;
        setQuizData([...results]);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Quizz App</h1>
      {quizData.length === 0 ? (
        <h1 className=" text-red-400"> Loading Quiz....</h1>
      ) : (
        <QuestionCard questions={quizData} />
      )}
    </>
  );
}

export default App;
