import type { NextPage } from "next";
import { useEffect, useState } from "react";

import Hero from "../components/hero/hero";
import TechSection from "../components/techSection/techSection";
import ProjectsSection from "../components/projectsSection/projectsSection";
import AboutSection from "../components/aboutSection/aboutSection";
import ContactSection from "../components/contactSection/contactSection";

import { StyledThree } from "../components/three/three.style";

const Home: NextPage = () => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const handleOverflow = () => {
    const body = window.document.body;
    trigger && (body.style.overflowY = "auto");
  };

  useEffect(handleOverflow, [trigger]);

  return (
    <div className="home">
      <Hero trigger={trigger} setTrigger={setTrigger} />

      <div className="sections">
        <TechSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>

      <StyledThree trig={trigger} />
    </div>
  );
};

export default Home;
