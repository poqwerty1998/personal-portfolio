"use client";

import React from "react";
import longhair from "@/public/longhair.jpeg";
import longhairCropped from "@/public/longhairCropped.jpg";
import aquarium from "@/public/aquarium.jpg";
import aquariumCropped from "@/public/aquariumCropped.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={longhairCropped}
              alt="Peter portrait"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-60 w-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              {/* 👋 */}
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey! I'm Peter.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. My passion is
        in building <span className="italic">front-end applications</span>. My
        current focus is exploring the world of web development with{" "}
        <span className="underline">React.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
        hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here!{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
        hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/Peter Xiao Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:transition-y-1 transition" />
        </a>

        <a
          className="bg-white px-4 py-3 text-gray-700 flex items-center gap-2 rounded-full focus-scale[1.15]
        hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/peter-xiao-156978149/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white px-4 py-3 text-gray-700 flex items-center gap-2 text-[1.35rem] focus-scale-[1.15] rounded-full
        hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/poqwerty1998"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
