import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.parent}>
      <div className={classes.errorPerent}>
        <label className={classes.label}>{props.label}</label>
        {props.people === "0" && <p className={classes.error}>Can’t be zero</p>}
      </div>

      <img className={classes.icon} src={props.icon} alt="icon"></img>
      <input
        onChange={(e) => {
          props.setAmount(e.target.value);
        }}
        className={props.people === "0" ? classes.red : classes.input}
        placeholder={"0"}
        type="number"
      ></input>
    </div>
  );
}

export default Input;
