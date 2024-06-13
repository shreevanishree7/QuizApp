import React from "react";
import { Question } from "./Question";

export function Content() {
  function getResults(event) {
    event.preventDefault();
    let marks = 0;
    const form = event.target;

    const checkAnswer = (questionName, correctAnswer) => {
      const selectedAnswer = form.querySelector(
        `input[name="${questionName}"]:checked`
      ).value;

      if (selectedAnswer === correctAnswer) {
        marks++;
      }
    };

    checkAnswer("question1", "main");
    checkAnswer("question2", "32 bits");
    checkAnswer("question3", "false");
    checkAnswer("question4", "Byte");
    checkAnswer("question5", "JDB");
    alert(marks);
  }

  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q1="Which of the following is not a Java Keyword?"
          name="question1"
          op1="static"
          op2="void"
          op3="private"
          op4="main"
        />

        <Question
          q1="What is the size of an 'int' variable in Java?"
          name="question2"
          op1="8 bits"
          op2="16 bits"
          op3="32 bits"
          op4="64 bits"
        />

        <Question
          q1="What is the default value of a boolean variable in Java?"
          name="question3"
          op1="true"
          op2="false"
          op3="0"
          op4="null"
        />

        <Question
          q1="What is the following is not a primitive data type in Java?"
          name="question4"
          op1="int"
          op2="Byte"
          op3="float"
          op4="char"
        />
        <Question
          q1="Which is the following is used to find and fix bugs in the Java programs?"
          name="question5"
          op1="JVM"
          op2="JRE"
          op3="JDK"
          op4="JDB"
        />
      </div>
      <br />
      <input type="submit" value="SUMBIT"></input>
    </form>
  );
}
