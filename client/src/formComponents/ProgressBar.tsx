import React from "react";
import "../css/progress-bar.scss";

function ProgressBar({
  stages,
  currentStageIndex,
}: {
  stages: string[];
  currentStageIndex: number;
}) {
  const displayStage = (stage: string, i: number) => {
    return (
      <div className="stage" key={stage}>
        <div className="stage-point">
          <div className="first-wrapper">
            <div className="second-wrapper">
              <span
                className={`stage-point--number ${
                  currentStageIndex >= i && "fill-circle"
                }`}
              >
                {i + 1}
              </span>{" "}
              <span className="stage-point--text">{stage}</span>
            </div>
          </div>
        </div>
        <div
          className={`stage-line ${currentStageIndex > i && "fill-bar"}`}
        ></div>
      </div>
    );
  };

  return (
    <div
      className="progressBar"
      style={{
        gridTemplateColumns: ` 1.5fr repeat( ${stages.length - 1}, 1fr) 1.5fr`,
      }}
    >
      <div className="stage-line first-line fill-bar"></div>
      {stages.map((stage, i) => displayStage(stage, i))}
    </div>
  );
}

export default ProgressBar;
