import classes from "./NextAction.module.css";

const NextAction = (props) => {
  const changeQuestionHandler = () => {
    props.changeQuestion();
    props.hideNext();
  };

  return (
    <div>
      <h1 className={classes["action-status"]}>{props.status}</h1>
      <button
        onClick={changeQuestionHandler}
        className={classes["action-btn"]}
        type="button"
      >
        Next Question
      </button>
    </div>
  );
};

export default NextAction;
