import styled from "styled-components";

export const StyledContactSection = styled.section`
  display: flex;

  .contactTitle {
    width: 42%;
    height: 60%;
    align-self: flex-end;
    color: white;
    font-size: 3rem;
    display: flex;
    align-items: center;
    text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
    justify-content: center;
  }

  .contactContent {
    width: 58%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .emailme {
    border-radius: 131px;
    background: #ffffff;
    box-shadow: inset 16px 16px 32px #d4d4d4, inset -16px -16px 32px #ffffff;
    padding: 1rem 2rem;
    font-size: 2rem;
    margin-top: 4rem;
    display: flex;
    align-items: center;
  }

  .s {
    margin-left: 1rem;
  }
  .s:hover {
    cursor: pointer;
  }

  .social > a > * {
    width: 100px;
    height: 100px;
    margin: 1rem;
  }

  .social > *:nth-child(1) {
    color: #0072b1;
  }
  .social > *:nth-child(3) {
    color: #1d9bf0;
  }
  .social > *:nth-child(4) {
    color: #ff0000;
  }

  .done {
    font-size: 3rem;
    color: #86dc3d;
    opacity: 0;
    transition: all 0.2s;
  }

  @media screen and (max-width: 1280px) {
    background-color: #212121;

    .contactTitle {
      /* border: 3px solid green; */
      height: 100%;
    }
    .contactContent {
      /* border: 3px solid violet; */
    }
  }
`;
