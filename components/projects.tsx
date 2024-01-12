"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} className="scroll-mt-28" id="projects">
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