import React, { SyntheticEvent, useState } from "react";
import Header from "./Header";
import "./css/signup.scss";
import "./css/login.scss";
import GeneralInfo from "./formComponents/GeneralInfo";
import Password from "./formComponents/Password";
import ExtraInfo from "./formComponents/ExtraInfo";
import ProgressBar from "./formComponents/ProgressBar";

const stages = ["first", "second", "final"];

function SignUp() {
  const [currentStage, setCurrentStage] = useState("first");
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  const displayProgressButton = (text: string, isDisabled?: boolean) => {
    const index = stages.indexOf(currentStage);

    if (text === "Back") {
      if (index > 0)
        return (
          <button
            className="btn btn-gray btn-left"
            onClick={() => {
              setCurrentStage(stages[index - 1]),
                setCurrentStageIndex((index) => index - 1);
            }}
          >
            Back &larr;
          </button>
        );
    }
    if (text === "Next") {
      if (index < stages.length - 1)
        return (
          <button
            disabled={isDisabled}
            className="btn btn-gray btn-right"
            onClick={() => {
              setCurrentStage(stages[index + 1]),
                setCurrentStageIndex((index) => index + 1);
            }}
          >
            Next &rarr;
          </button>
        );
    }
    return null;
  };

  const signup = (e: SyntheticEvent) => {
    e.preventDefault();
    setCurrentStageIndex((index) => index + 1);
  };
  return (
    <div className="signup">
      <Header />
      <ProgressBar stages={stages} currentStageIndex={currentStageIndex} />
      <div className="form">
        <form onSubmit={signup}>
          {currentStage === "first" && <GeneralInfo />}
          {currentStage === "second" && <Password />}
          {currentStage === "final" && <ExtraInfo />}
        </form>
        <div className="progress-button-wrapper">
          {displayProgressButton("Back")}
          {displayProgressButton("Next")}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
