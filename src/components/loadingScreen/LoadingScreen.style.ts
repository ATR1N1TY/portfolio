import styled from "styled-components";

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  /* background-color: #212121; */
  backdrop-filter: blur(30px);
  transition: all 1s;
  color: white;

  .logo {
    border-radius: 50%;
    animation: spin 2s linear alternate-reverse infinite;
    width: 250px;
    height: 250px;
  }

  .text {
    font-size: 2rem;
    font-weight: 700;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
