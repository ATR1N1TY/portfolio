import styled from "styled-components";
import IntroScreen from "./introScreen";

export const StyledIntroScreen = styled(IntroScreen)`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  position: absolute;
  background-color: #a026c1;

  h1 {
    position: relative;
    margin: 0;
    font-size: 5rem;
    max-width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* font-style: italic; */
    font-weight: 700;
    span:nth-child(1) {
      /* color: cyan; */
    }
    span:nth-child(2) {
      /* color: lime; */
    }
  }
`;
