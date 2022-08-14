import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  display: flex;
  justify-content: space-between;

  .projectsSection {
    /* border: 2px solid violet; */
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
    /* border: 2px solid green; */
    color: white;
    height: 80%;
    width: 40%;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
`;