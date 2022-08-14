import React from "react";
import { StyledAboutSection } from "./aboutSection.style";
import Image from "next/image";
import mee from "../../../public/assets/pictures/me.jpg";

const AboutSection = () => {
  return (
    <StyledAboutSection className="about" img={mee}>
      <div className="aboutSection">
        <p className="cooperation">
          {" "}
          <i>
            {" "}
            <span>Little thing I want to say...</span>{" "}
          </i>
        </p>
        <p>I always had great attitude about writing software</p>
        <p>But also love connecting with people</p>
        <p>we can build so many things together</p>
        <p>so let&#39;s work together!</p>
      </div>
      <div className="aboutTitle">
        <div className="picture">
          {/* <Image className="pic" src={mee} alt="r" /> */}
        </div>
        <h1>
          Evolution <br /> made us <br /> cooperative, <br /> not competetive
        </h1>
      </div>
    </StyledAboutSection>
  );
};

export default AboutSection;
