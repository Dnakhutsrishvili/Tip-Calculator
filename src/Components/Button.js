import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      onClick={() => {
        props.getPercent(props.percent);
      }}
      className={classes.btn}
    >
      {props.percent}%
    </button>
  );
}

export default Button;
