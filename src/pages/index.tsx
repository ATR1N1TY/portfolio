import type { NextPage } from "next";
import { useState } from "react";

import Hero from "../components/hero/hero";
import TechSection from "../components/techSection/techSection";
import ProjectsSection from "../components/projectsSection/projectsSection";
import AboutSection from "../components/aboutSection/aboutSection";
import ContactSection from "../components/contactSection/contactSection";

const Home: NextPage = () => {
  const [trigger, setTrigger] = useState<boolean>(false);

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
    </div>
  );
};

export default Home;
