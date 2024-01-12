import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import pmxApp from "@/public/PMXAPPage.png";
import connectHomePage from "@/public/ConnectServiceRequestsPage.png"
import contactlessEntry from "@/public/ContactlessEntry.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Personal",
    hash: "#personal",
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Toronto, ON",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "Toronto, ON",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Junior Software Engineer",
    location: "Toronto, ON",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PropertyManagementX",
    description:
      "A proptech platform catering to some of the world's largest and most complex real estate portfolios.",
    tags: ["C#", ".NET", "ASP.NET", "Javascript", "SQL"],
    imageUrl: pmxApp,
  },
  {
    title: "Connect",
    description:
      "A property tenant experience application focused on allowing tenants to manage their property.",
    tags: ["Android", "Kotlin", "RESTful API"],
    imageUrl: connectHomePage,
  },
  {
    title: "ContactlessEntry",
    description:
      "Allows property owners to screen visitors efficiently prior to building entry, and eliminates physical touch points and interactions during check-in.",
      tags: ["Android", "Kotlin", "RESTful API"],
    imageUrl: contactlessEntry,
  },
] as const;

export const skillsData = [
  "Android",
  "Kotlin",
  "RESTful API",
  "C#",
  ".NET",
  "ASP.NET",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
] as const;