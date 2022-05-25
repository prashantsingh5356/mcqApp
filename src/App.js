import "./App.css";
import questions from "./Data/questions.json";
import Header from "./components/Header/Header";
import Question from "./components/Questions/Question";
import { useState } from "react";

const DATA = questions;
const dataArray = [];

DATA.map((question, index) => {
  return dataArray.push({
    id: index,
    "question-number": index + 1,
    category: `${question.category
      .split("%3A%20")
      .join(" ")
      .split("%20")
      .join(" ")}`,
    difficulty: question.difficulty,
    type: question.type,
    question: `${question.question
      .split("%20")
      .join(" ")
      .split("%27")
      .join(" ")
      .split("%22")
      .join(" ")
      .split("%2C")
      .join(" ")
      .replace("%3F", "")}`,
    options: [
      `${question.correct_answer.split("%20").join(" ")}`,
      ...question.incorrect_answers,
    ],
    "correct-answer": `${question.correct_answer.split("%20").join(" ")}`,
  });
});
// console.log(dataArray);

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);

  const currentQuestion = dataArray[questionNumber];
  const totalQuestions = dataArray.length;

  const changeQuestionHandler = () => {
    if (questionNumber <= 19) {
      setQuestionNumber((prevQues) => prevQues + 1);
    }
  };

  return (
    <div className="container">
      <Header data={currentQuestion} total={totalQuestions}></Header>
      <Question
        data={currentQuestion}
        nextQuestion={changeQuestionHandler}
      ></Question>
    </div>
  );
}

export default App;
