import classes from "./Header.module.css";
import Star from "./Star";

const Header = (props) => {
  const questionNo = props.data["question-number"];
  let style;
  if (props.data.difficulty === "medium") {
    style = 2;
  } else if (props.data.difficulty === "hard") {
    style = 3;
  }
  //   console.log(style);

  return (
    <div className={classes["header-container"]}>
      <div
        className={classes["header-progress__bar"]}
        style={{ width: `${5 * questionNo}%` }}
      ></div>
      <span className={classes["header-question__number"]}>
        <h1>{`Question ${questionNo} of ${props.total}`} </h1>
      </span>
      <span className={classes["header-category"]}>{props.data.category}</span>
      <br />
      <span className={classes["header-difficulty"]}>
        <span className={classes["easy"]}>
          <Star />
        </span>
        <span
          className={
            style >= 2 ? classes["medium"] : classes["difficulty-style"]
          }
        >
          <Star />
        </span>
        <span
          className={
            style === 3 ? classes["hard"] : classes["difficulty-style"]
          }
        >
          <Star />
        </span>
      </span>
    </div>
  );
};

export default Header;
