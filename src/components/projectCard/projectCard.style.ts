import styled from "styled-components";
import ProjectCard from "./projectCard";

export const StyledProjectCard = styled(ProjectCard)`
  width: 64rem;
  height: 38rem;
  aspect-ratio: 16 / 9;
  /* border: 3px solid green; */
  position: relative;
  transition: all 0.2s;
  /* border-radius: 30px; */
  /* margin-left: 50%; */
  /* margin-right: 50%; */

  &:hover {
    transform: scale(1.02);
  }

  .projectImage {
    border-radius: 30px;
  }

  .title {
    margin: 0;
    font-size: 7rem;
    position: absolute;
    right: 10px;
    text-shadow: 5px 5px 30px rgba(0, 0, 0, 0.6);
    bottom: 20px;
    color: white;
    font-family: "Righteous", cursive;
  }
`;
