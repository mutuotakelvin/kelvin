"use client"
import { FaMicrochip } from "react-icons/fa6";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import React,{ useEffect} from "react";
import { skills } from "../constants/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from "framer-motion";

const fedeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ( {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.05 * index
    }
  })
}

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
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <motion.div 
            variants={fedeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={index}
            key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <HiOutlineBadgeCheck className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
