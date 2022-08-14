import React from "react";
import { StyledProjectsSection } from "./projectsSection.style";
import { StyledProjectCard } from "../projectCard/projectCard.style";

//mock pictures
import mock from "../../../public/assets/pictures/mock.jpg";
import mock1 from "../../../public/assets/pictures/mock1.jpg";
import mock2 from "../../../public/assets/pictures/mock2.jpg";

const ProjectsSection = () => {
  return (
    <StyledProjectsSection className="projects">
      <div className="projectsSection">
        <StyledProjectCard title="Weatherma" image={mock} />
        <StyledProjectCard title="GlassComm" image={mock1} />
        <StyledProjectCard title="QuickSander" image={mock2} />
      </div>
      <div className="projectsTitle">
        <h1>My TOP Projects</h1>
      </div>
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
