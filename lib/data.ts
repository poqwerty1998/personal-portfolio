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
    name: "Projects",
    hash: "#projects"
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Post Secondary Studies",
    location: "Toronto, ON",
    description:
      "I graduated after 5 years of my undergrad at the University of Toronto with a Bachelors of Science, as a Specialist in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Junior Software Engineer",
    location: "Toronto, ON",
    description:
      "I worked at Angus Systems as a front-end Junior Software Engineer on the mobile team, developing the native Android version of the apps Connect and Contactless Entry with Kotlin.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Feb 2022",
  },
  {
    title: "Software Engineer",
    location: "Toronto, ON",
    description:
      "I worked at MRI Software LLC on the product Property Management X, focusing on enhancing the Investment Accounting Application with the technologies of C#, JavaScript, .NET, and SQL.",
    icon: React.createElement(FaReact),
    date: "Feb 2022 - Nov 2023",
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
    tags: ["Android", "Kotlin", "REST"],
    imageUrl: connectHomePage,
  },
  {
    title: "ContactlessEntry",
    description:
      "Allows property owners to screen visitors efficiently prior to building entry, and eliminates physical touch points and interactions during check-in.",
      tags: ["Android", "Kotlin", "REST"],
    imageUrl: contactlessEntry,
  },
] as const;

export const skillsData = [
  "Android",
  "Kotlin",
  "RESTful APIs",
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