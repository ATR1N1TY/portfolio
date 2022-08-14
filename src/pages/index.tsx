import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import { StyledIntroScreen } from "../components/IntroScreen/introScreen.style";
import { StyledThree } from "../components/three/three.style";
import { StyledGlass } from "../components/glassmorphicCard/glass.style";

import { StyledProjectCard } from "../components/projectCard/projectCard.style";

//after
import Hero from "../components/hero/hero";
import TechSection from "../components/techSection/techSection";
import ProjectsSection from "../components/projectsSection/projectsSection";
import AboutSection from "../components/aboutSection/aboutSection";
import ContactSection from "../components/contactSection/contactSection";

const Home: NextPage = () => {
  const [trigger, setTrigger] = useState<boolean>(false);

  const handleOverflow = () => {
    const body = window.document.body;
    trigger && (body.style.overflowY = "auto");
  };

  return (
    <div className="home">
      <Hero trigger={trigger} setTrigger={setTrigger} />

      <div className="sections">
        <TechSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>

      {/* <StyledThree trig={trigger} /> */}
      <div className="backgroundCont"></div>
    </div>
  );
};

export default Home;
