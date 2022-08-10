import React from "react";
import Image from "next/image";
import atrinityLogo from "../../../public/assets/pictures/LOGO.jpg";

const ProgressPoints = (props: { className?: string; stepsCount?: number }) => {
  const { className, stepsCount } = props;

  return (
    <div className={className}>
      <div className="step">
        <Image className="step" src={atrinityLogo} alt="atrLOGO" />
      </div>
      <div className="step still">
        <Image className="step" src={atrinityLogo} alt="atrLOGO" />
      </div>
      <div className="step still">
        <Image className="step" src={atrinityLogo} alt="atrLOGO" />
      </div>
    </div>
  );
};

export default ProgressPoints;
