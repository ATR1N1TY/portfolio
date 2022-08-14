import styled from "styled-components";
import ProjectCard from "./projectCard";

export const StyledProjectCard = styled(ProjectCard)`
  width: 32rem;
  height: 19rem;
  aspect-ratio: 16 / 9;

  position: relative;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:hover .title {
    transform: scale(1.3);
  }

  .projectImage {
    border-radius: 25px;
  }

  .title {
    margin: 0;
    font-size: 3rem;
    position: absolute;
    right: 10px;
    text-shadow: 5px 5px 30px rgba(0, 0, 0, 0.6);
    bottom: 20px;
    color: white;
    transition: all 0.3s;
  }
`;
