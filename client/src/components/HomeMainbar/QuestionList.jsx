import React from "react";
import Ques from "./Ques";

const QuestionList = ({ questionList }) => {
  return (
    <>
      {questionList.map((question) => (
        <Ques question={question} key={question.id} />
      ))}
    </>
  );
};

export default QuestionList;
