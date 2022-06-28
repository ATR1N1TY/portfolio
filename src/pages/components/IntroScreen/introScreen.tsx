import React from "react";
import { StyledAuroraGradient } from "../backgrounds/auroraGradient/auroraGradient.style";

const IntroScreen = (props: { className?: string; children: any }) => {
  const { className, children } = props;

  return (
    <main className={className}>
      <StyledAuroraGradient />
      {children}
    </main>
  );
};

export default IntroScreen;
