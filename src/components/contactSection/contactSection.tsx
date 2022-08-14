import React, { useState, useEffect } from "react";
import { StyledContactSection } from "./contactSection.style";
import { MdCopyAll } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MdDone } from "react-icons/md";

const ContactSection = () => {
  const [showElement, setShowElement] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 1000);
  }, [showElement]);

  return (
    <StyledContactSection className="contact">
      <div className="contactTitle">
        <h1>Contact Me</h1>
      </div>

      <div className="contactContent">
        <div className="social">
          <BsLinkedin />
          <BsGithub />
          <BsTwitter />
          <BsYoutube />
        </div>

        <div className="emailme">
          <span>saba4inasaridze@gmail.com</span>
          <MdCopyAll
            onClick={() => {
              {
                setShowElement(true);
                navigator.clipboard.writeText("saba4inasaridze@gmail.com");
              }
            }}
            className="s"
          />
        </div>

        <MdDone className="done" style={{ opacity: showElement ? 1 : 0 }} />
      </div>
    </StyledContactSection>
  );
};

export default ContactSection;
