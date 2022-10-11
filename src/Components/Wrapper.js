import React, { useState } from "react";
import classes from "./Wrapper.module.css";
import Input from "./Input";
import icon from "../Assets/images/icon-dollar.svg";
import TipPercent from "./TipPercent";
import iconSecond from "../Assets/images/icon-person.svg";
import TipSum from "./TipSum";

function Wrapper() {
  const [amount, setAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState(0);

  let sum = 0;
  let tip = (amount * tipPercent) / 100;

  let tipAmountPerPerson = tip / people;
  let amountNumber = parseInt(amount);
  console.log(typeof amount);
  sum = amountNumber + tip;
  let sumForEach = sum / people;
  console.log(sumForEach);
  return (
    <div className={classes.parent}>
      <h1 className={classes.header}>
        SPLI
        <br />
        TTER
      </h1>
      <div className={classes.container}>
        <div className={classes.responsiveSplit}>
          <Input
            amount={amount}
            setAmount={setAmount}
            icon={icon}
            label={"Bill"}
          ></Input>

          <TipPercent setPercent={setTipPercent}></TipPercent>
          <Input
            people={people}
            setAmount={setPeople}
            icon={iconSecond}
            label={"Number of People"}
          ></Input>
        </div>
        <div className={classes.responsiveSplit}>
          <TipSum
            setAmount={setAmount}
            tipAmountPerPerson={
              people > 0 ? tipAmountPerPerson.toFixed(2) : "0.00"
            }
            splitAmountPerPerson={people > 0 ? sumForEach.toFixed(2) : "0.00"}
          ></TipSum>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
