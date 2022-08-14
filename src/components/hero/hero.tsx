import React, { Dispatch, SetStateAction } from "react";
import { StyledHero } from "./hero.style";

import { StyledIntroScreen } from "../IntroScreen/introScreen.style";
import { StyledGlass } from "../glassmorphicCard/glass.style";

import { BsChevronDoubleDown } from "react-icons/bs";

const Hero = (props: {
  trigger: boolean;
  setTrigger: Dispatch<SetStateAction<boolean>>;
}) => {
  const { trigger, setTrigger } = props;

  return (
    <StyledHero className="hero">
      {/* intro */}
      {!trigger && <StyledIntroScreen triggerCallback={setTrigger} />}

      {trigger && (
        <div className="wrapper">
          <StyledGlass>
            <h1>Hi, I&#39;m Saba, Frontend Engineer</h1>
            <h2>based in Tbilisi, Georgia</h2>
            <p>
              and I&#39;m eager to implement your UI/UX into maintainable code
              with zest and determination to see your visions and dreams come to
              fruition
            </p>
          </StyledGlass>
        </div>
      )}

      {trigger && <BsChevronDoubleDown className="scroll" />}
    </StyledHero>
  );
};

export default Hero;
