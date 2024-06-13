import React from "react";
import "./Question.css";
export function Question(Props) {
  return (
    <div id="ques">
      <h1>{Props.q1}</h1>

      <input type="radio" name={Props.name} value={Props.op1}></input>
      {Props.op1}

      <input type="radio" name={Props.name} value={Props.op2}></input>
      {Props.op2}

      <input type="radio" name={Props.name} value={Props.op3}></input>
      {Props.op3}

      <input type="radio" name={Props.name} value={Props.op4}></input>
      {Props.op4}
    </div>
  );
}
