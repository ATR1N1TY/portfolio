import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  display: flex;
  justify-content: space-between;

  .projectsSection {
    height: 100%;
    width: 55%;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .projectsSection > article:nth-child(3) {
    align-self: flex-start;
  }
  .projectsSection > article:nth-child(1) {
    align-self: flex-end;
  }

  .projectsTitle {
    color: white;
    height: 80%;
    width: 40%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
    font-size: 3rem;
  }

  @media screen and (max-width: 1536px) {
    .projectsSection {
      width: 60%;
    }
    .projectsTitle {
      height: 60%;
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 1280px) {
    flex-direction: column-reverse;
    background-color: #212121;
    justify-content: center;

    .projectsTitle {
      width: 100%;
      height: 15%;
    }

    .projectsSection {
      width: 100%;
      height: auto;
      flex-direction: row;
    }
  }
`;
