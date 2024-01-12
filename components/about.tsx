"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 margin-w-[45rem] text-center leading-8 sm:mb-40 sm:w-[55rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a graduate from the{" "}
        <span className="font-medium">University of Toronto.</span> The degree I
        obtained was a Bachelors of{" "}
        <span className="font-medium">Computer Science</span>, specializing in{" "}
        <span className="font-medium">Software Engineering.</span> I now have 3
        years of development experience, with 2 years of front-end development
        experience in the <span className="font-medium">Android</span>{" "}
        framework, and 1 year of full-stack web development experience.{" "}
      </p>
      <p className="mb-3">
        My favorite part of being an engineer is the problem-solving aspect, as
        the rewards of solving said problems manifest into either something that
        you can hold in your hand in the form of a mobile app, or a beautiful
        looking and high functional webpage.{" "}
      </p>
      <p className="mb-3">
        Technologies I've used in my career so far include{" "}
        <span className="font-medium">Kotlin</span> for native Android
        development, <span className="font-medium">C#</span> and{" "}
        <span className="font-medium">.NET</span> for full-stack web
        devleopment, and also{" "}
        <span className="font-medium">React, Javascript(TypeScript)</span> for
        the development of this personal portfolio.{" "}
      </p>
      <p className="mb-3">
        I love learning new technologies, especially when applied in an industry
        context where there are clients using the products I've contributed to.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>
      <p>
        During my free time, I enjoy playing
        video games, watching documentary type videos, play the piano, and
        spending time with my family.{" "}
      </p>
    </motion.section>
  );
}
