import NextAction from "../NextAction/NextAction";
import classes from "./Question.module.css";
import { useState, useEffect } from "react";

const Question = (props) => {
  const [selected, setSelected] = useState(false);
  const [randomOptions, setRandomOptions] = useState([]);
  const [answerStatus, setAnswerStatus] = useState(" ");

  const options = props.data.options;
  console.log(options);

  useEffect(() => {
    setRandomOptions(options.sort(() => 0.5 - Math.random()));
  }, [options]);

  const selectedOption = (event) => {
    event.preventDefault();
    // console.log(event.target);
    setSelected(true);
  };

  const selectedOptionHide = () => {
    setSelected(false);
  };

  const optionHandler = (e) => {
    const userSelectedOption = e.target.innerText;
    // console.log(userSelectedOption);
    if (userSelectedOption === props.data["correct-answer"]) {
      console.log("correct answer");
      setAnswerStatus("Correct!");
    } else {
      setAnswerStatus("Wrong");
    }
  };

  return (
    <div className={classes["question-container"]}>
      <div className={classes["question-detail"]}>
        <p>{props.data.question}</p>
      </div>

      <form onSubmit={selectedOption} className={classes["question-options"]}>
        {randomOptions[0] && (
          <button
            onClick={optionHandler}
            type="submit"
            className={classes["option-1"]}
          >
            {randomOptions[0]}
          </button>
        )}
        {randomOptions[1] && (
          <button
            onClick={optionHandler}
            type="submit"
            className={classes["option-2"]}
          >
            {randomOptions[1]}
          </button>
        )}
        {randomOptions[2] && (
          <button
            onClick={optionHandler}
            type="submit"
            className={classes["option-3"]}
          >
            {randomOptions[2]}
          </button>
        )}
        {randomOptions[3] && (
          <button
            onClick={optionHandler}
            type="submit"
            className={classes["option-4"]}
          >
            {randomOptions[3]}
          </button>
        )}
      </form>

      <div className={classes["next-action__btn"]}>
        {selected && (
          <NextAction
            hideNext={selectedOptionHide}
            changeQuestion={props.nextQuestion}
            status={answerStatus}
          ></NextAction>
        )}
      </div>
    </div>
  );
};

export default Question;
