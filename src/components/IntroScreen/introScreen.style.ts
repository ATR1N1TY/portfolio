import styled from "styled-components";
import IntroScreen from "./introScreen";

export const StyledIntroScreen = styled(IntroScreen)`
  height: 100%;
  width: 50%;
  margin-left: 50%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  blockquote {
    margin: 0;
    max-width: 90%;
    font-size: 3rem;
    transition: all 1s;
  }

  p {
    margin-bottom: 0;
    font-style: italic;
  }

  .gradient-violet {
    background: -webkit-linear-gradient(
      25deg,
      rgba(47, 36, 204, 1) 0%,
      rgba(141, 63, 218, 1) 40%,
      rgba(136, 32, 200, 1) 59%,
      rgba(28, 28, 196, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
