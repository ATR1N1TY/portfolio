import React from "react";
import Image from "next/image";
import { StyledTechSection } from "./techSection.style";

import htmlLogo from "../../../public/assets/technologies/html.png";
import cssLogo from "../../../public/assets/technologies/css.png";
import jsLogo from "../../../public/assets/technologies/js.png";
import tsLogo from "../../../public/assets/technologies/TS.png";
import reactLogo from "../../../public/assets/technologies/react.png";
import nextLogo from "../../../public/assets/technologies/next.png";
import reduxLogo from "../../../public/assets/technologies/redux.svg";
import scLogo from "../../../public/assets/technologies/sc.png";
import twLogo from "../../../public/assets/technologies/tailwind.png";
import qlLogo from "../../../public/assets/technologies/graphql.png";
import gitLogo from "../../../public/assets/technologies/Git_icon.svg.png";

const TechSection = () => {
  return (
    <StyledTechSection className="techs">
      <div className="techTitle">
        <h1>Technologies I use</h1>
      </div>

      <div className="content">
        <div className="tech">
          <Image src={htmlLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={cssLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={jsLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={tsLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={reactLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={reduxLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={scLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={twLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={qlLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={gitLogo} alt="tech" />
        </div>
        <div className="tech">
          <Image src={nextLogo} alt="tech" />
        </div>
      </div>
    </StyledTechSection>
  );
};

export default TechSection;
