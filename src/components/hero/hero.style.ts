import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  .wrapper {
    /* border: 1px solid red; */
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 10;
  }

  .scroll {
    position: absolute;
    color: white;
    font-size: 4rem;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    animation: animate-scroll 1s 3s ease infinite alternate;
  }

  @keyframes animate-scroll {
    0% {
      transform: translate(-50%, -10px);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
`;
