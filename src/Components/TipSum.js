import React from "react";
import classes from "./TipSum.module.css";

function TipSum(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className={classes.conteiner}>
      <div className={classes.flexFirst}>
        <div className={classes.flexSecond}>
          <p className={classes.amount}>Tip Amount</p>
          <p className={classes.person}>/ person</p>
        </div>
        <div className={classes.sum}>{props.tipAmountPerPerson}$</div>
      </div>
      <div className={classes.flexFirst}>
        <div className={classes.flexSecond}>
          <p className={classes.amount}>Total</p>
          <p className={classes.person}>/ person</p>
        </div>
        <div className={classes.sum}>{props.splitAmountPerPerson}$</div>
      </div>
      <button onClick={refreshPage} className={classes.btn}>
        RESET
      </button>
    </div>
  );
}

export default TipSum;
