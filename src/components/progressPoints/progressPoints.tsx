import React from "react";
import Image from "next/image";
import atrinityLogo from "../../../public/assets/pictures/LOGO.jpg";

const ProgressPoints = (props: {
  className?: string;
  totalSteps: number;
  currStep: number;
}) => {
  const { className, totalSteps, currStep } = props;

  const step = (
    <div className="step">
      <Image className="step" src={atrinityLogo} alt="atrLOGO" />
    </div>
  );

  const steps = Array(totalSteps);
  // console.log(totalSteps);

  return (
    <div className={className}>
      {/* <div className="step">
        <Image className="step" src={atrinityLogo} alt="atrLOGO" />
      </div>
      <div className="step ">
        <Image className="step" src={atrinityLogo} alt="atrLOGO" />
      </div>
      <div className="step still">
        <Image className="step" src={atrinityLogo} alt="atrLOGO" />
      </div> */}
      {[...Array(totalSteps)].map((_, idx) =>
        idx < currStep + 1 ? (
          <div key={idx} className="step">
            <Image className="step" src={atrinityLogo} alt="atrLOGO" />
          </div>
        ) : (
          <div key={idx} className="step">
            <Image className="step still" src={atrinityLogo} alt="atrLOGO" />
          </div>
        )
      )}
    </div>
  );
};

export default ProgressPoints;
