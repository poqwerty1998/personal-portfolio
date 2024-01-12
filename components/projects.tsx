import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <ProjectDescription />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function ProjectDescription() {
  return (
    <section className="text-center mb-10">
      Projects I've been involved in during my past work experiences.
    </section>
  );
}