"use client"
import { FaMicrochip } from "react-icons/fa6";
import React,{ useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import Technologies from "./technologies";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3
  })
  const { setActive, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActive('Skills')
    }
  }, [inView, setActive, timeOfLastClick])
  return (
    <section ref={ref} id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <FaMicrochip className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Here are a few technologies I’ve been working with recently:
          </p>
        </div>
      </div>
      <Technologies />
    </section>
  );
};

export default Skills;
