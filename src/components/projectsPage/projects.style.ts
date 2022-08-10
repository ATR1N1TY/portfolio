import styled from "styled-components";
import ProjectsPage from "./projectsPage";

export const StyledProjectsPage = styled(ProjectsPage)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-color: #212121;

  .projectsScroll {
    padding: 1rem;
    display: grid;
    grid-auto-flow: column;
    /* grid-auto-columns: 50%; */
    gap: 10%;

    overflow-x: scroll;
    overflow-y: hidden;

    overscroll-behavior-inline: inline;

    position: relative;

    /* scroll-snap-type: inline mandatory; */

    /* ::-webkit-scrollbar {
      display: none;
    } */
  }

  .projectsScroll > * {
    /* scroll-snap-align: start; */
  }
`;
