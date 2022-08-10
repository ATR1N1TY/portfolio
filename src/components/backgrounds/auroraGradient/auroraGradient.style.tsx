import styled from "styled-components";
import AuroraGradient from "./auroraGradient";

export const StyledAuroraGradient = styled(AuroraGradient)`
  & {
    position: relative;
  }

  .blob {
    width: 600px;
    height: 600px;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    filter: blur(150px);
  }

  .blob:nth-child(1) {
    transform: translate(65vw, 400px);
    background-color: #4a11b6;
  }
  .blob:nth-child(2) {
    transform: translate(700px, 0%);
    background-color: #1cb7cc;
  }
  .blob:nth-child(3) {
    transform: translate(0%, 65%);
    background-color: #0c6fcc;
  }
`;
