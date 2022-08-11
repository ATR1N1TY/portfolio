import React, { useEffect, useState } from "react";
import { StyledProgressPoints } from "../progressPoints/ProgressPoints.style";

const IntroScreen = (props: {
  className?: string;
  children?: any;
  style?: { display: string };
  triggerCallback: any;
}) => {
  const { className, children, style, triggerCallback } = props;
  const [tracker, setTracker] = useState(0);

  const quotes = [
    <blockquote
      key="0"
      className="blockquote"
      cite="https://www.forrester.com/blogs/09-10-15-leaving_user_experience_to_chance_hurts_companies/#:~:text=A%20well%2Ddesigned%20site%20can,with%20a%20superior%20user%20experience."
    >
      Sites with superior <span className="gradient-blue">User Experience</span>{" "}
      can have <span className="gradient-violet">400%</span> higher conversion
      rates. (Source)
    </blockquote>,
    <blockquote key="1" className="blockquoteTwo">
      but, <br /> great <span className="gradient-blue">User Experience</span>{" "}
      requires great{" "}
      <span className="gradient-violet">Frontend Development</span>
    </blockquote>,
  ];

  useEffect(() => {
    tracker >= quotes.length ? triggerCallback(true) : triggerCallback(false);
  }, [tracker]);

  return (
    <main
      className={className}
      onClick={() => setTracker((tracker) => ++tracker)}
      style={{ display: tracker >= quotes.length ? "none" : "flex" }}
    >
      {quotes[tracker] && quotes[tracker]}
      <p>Right Click anywhere to Continue</p>
      <StyledProgressPoints totalSteps={quotes.length} currStep={tracker} />
    </main>
  );
};

export default IntroScreen;
