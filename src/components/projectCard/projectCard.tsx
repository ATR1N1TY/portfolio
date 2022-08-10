import React from "react";
import Image, { StaticImageData } from "next/image";

const ProjectCard = (props: {
  className?: string;
  title: string;
  image: StaticImageData;
}) => {
  const { className, title, image } = props;

  return (
    <article className={className}>
      <a
        href="https://glass-commerce.vercel.app/"
        rel="noreferrer"
        target="_blank"
      >
        <Image className="projectImage" src={image} alt="projectImage" />
        <h1 className="title">{title}</h1>
      </a>
    </article>
  );
};

export default ProjectCard;
