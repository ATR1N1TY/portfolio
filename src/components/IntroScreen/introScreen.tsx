import React, { useState } from "react";
import { StyledProgressPoints } from "../progressPoints/ProgressPoints.style";

const IntroScreen = (props: {
  className?: string;
  children?: any;
  style?: { display: string };
}) => {
  const { className, children, style } = props;

  const [firstHidden, setFirstHidden] = useState<boolean>(false);

  return (
    <main
      className={className}
      style={style}
      onClick={() => setFirstHidden((firstHidden) => !firstHidden)}
    >
      <blockquote
        className={`blockquote ${firstHidden ? "hide" : ""}`}
        cite="https://www.forrester.com/blogs/09-10-15-leaving_user_experience_to_chance_hurts_companies/#:~:text=A%20well%2Ddesigned%20site%20can,with%20a%20superior%20user%20experience."
      >
        Sites with superior{" "}
        <span className="gradient-blue">User Experience</span> can have{" "}
        <span className="gradient-violet">400%</span> higher conversion rates.
        (Source)
      </blockquote>

      <blockquote className={`blockquoteTwo ${!firstHidden ? "hide" : ""} `}>
        but, <br /> great <span className="gradient-blue">User Experience</span>{" "}
        requires great{" "}
        <span className="gradient-violet">Frontend Development</span>
      </blockquote>

      <p>Right Click anywhere to Continue</p>

      <StyledProgressPoints />
    </main>
  );
};

//when user will click this compnent third time hide this component and execute the camera transition
//then show main screen

export default IntroScreen;
