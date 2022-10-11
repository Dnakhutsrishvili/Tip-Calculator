import React from "react";
import Button from "./Button";
import classes from "./TipPercent.module.css";

function TipPercent(props) {
  return (
    <div className={classes.percentParent}>
      <h2 className={classes.header}>Select Tip %</h2>
      <div className={classes.btnBox}>
        <Button getPercent={props.setPercent} percent={"5"}></Button>
        <Button getPercent={props.setPercent} percent={"10"}></Button>
        <Button getPercent={props.setPercent} percent={"15"}></Button>
        <Button getPercent={props.setPercent} percent={"25"}></Button>
        <Button getPercent={props.setPercent} percent={"50"}></Button>
        <input
          onChange={(e) => {
            props.setPercent(e.target.value);
          }}
          className={classes.custum}
          placeholder={"Custom"}
          type="number"
        ></input>
      </div>
    </div>
  );
}

export default TipPercent;
