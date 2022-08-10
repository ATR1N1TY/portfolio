import React from "react";
import { StyledProjectCard } from "../projectCard/projectCard.style";
//what we need for this component:
// 1. cool font background "PROJECTS"
// 2. left to right scroll with dispersion effect
// 3. project cards are moving based on mouse positon
// description element
import glass from "../../../public/assets/pictures/glassComm.png";

const ProjectsPage = (props: { className?: string }) => {
  const { className } = props;

  return (
    <section className={className}>
      <div className="projectsScroll">
        <StyledProjectCard title="Weatherma" image={glass} />
        <StyledProjectCard title="Mandragora" image={glass} />
        <StyledProjectCard title="GlassComm" image={glass} />
      </div>
    </section>
  );
};

export default ProjectsPage;
