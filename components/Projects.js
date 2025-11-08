"use client"
import { IoCodeSlash } from "react-icons/io5";
import React, { useEffect } from "react";
import { projects } from "../constants/data";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import BentoGrid from "./ProjectBento";


const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5
  })
  const { setActive, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000){
      setActive('Past Work')
    }
  }, [inView, setActive, timeOfLastClick])

  return (
    <section 
    ref={ref}
    id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-16 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-16">
          <IoCodeSlash className="mx-auto inline-block w-20 mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I &apos; ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
          Here are a few projects I've been working on recently:
          </p>
        </div>
          <BentoGrid />
      </div>
    </section>
  );
};

export default Projects;
