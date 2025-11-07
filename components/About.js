"use client"
import React from "react";
import { TypeAnimation } from 'react-type-animation'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="container mx-auto flex px-5 md:px-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font leading-relaxed sm:text-4xl text-3xl mb-4 font-medium text-white">
            <TypeAnimation
              sequence={[
                'Hi, I\'m Kelvin.', 1000,
                'I love building amazing websites.', 1000,
              ]} wrapper="span" speed={50} cursor={true} 
              style={{ fontSize: '1.5em', display: 'inline-block' }}
            />
          </h1>
          <motion.p className="mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}

          >
            Software developer with 3+ year at KaziQuest. Strong computer science foundation and web development skills from past
            roles at Pro Innovation and Technologies and Metraverse Safaris. Passionate about technology, demonstrated by
            contributions to hackathons in cybersecurity, metaverse and blockchain. Seeking to leverage skills and drive to make a
            meaningful contribution in the tech industry.
          </motion.p>
            <div className="flex gap-4 items-center mb-4">
                <motion.a
                initial={{ y:-100,  opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{ 
                  duration: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="/CV.pdf"
                download
              >
                Download CV{" "}
                <FaDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </motion.a>

              <motion.a
              initial={{ y:-100,  opacity: 0 }}
              animate={{ y:0, opacity: 1 }}
              transition={{ 
                duration: 0.2,
                type: "spring",
                stiffness: 100
              }}
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/kelvin-mutuota/"
                target="_blank"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
              initial={{ y:-100,  opacity: 0 }}
              animate={{ y:0, opacity: 1 }}
              transition={{ 
                duration: 0.2,
                type: "spring",
                stiffness: 100
              }}
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/mutuotakelvin"
                target="_blank"
              >
                <FaGithub />
              </motion.a>
            </div>
          <motion.div className="flex justify-center"
            initial={{ y:-100,  opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ 
              duration: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <Link
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg focus:scale-110 hover:scale-110 active:scale-105 transition"
            >
              Work With Me
            </Link>
            <Link
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg focus:scale-110 hover:scale-110 active:scale-105 transition"
            >
              See My Past Work
            </Link>
          </motion.div>
        </div>
        <motion.div className="lg:max-w-lg lg:w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.0}}
          animate={{ opacity: 1, scale: 1.0}}
          transition={{ 
            duration: 0.1,
            type: "tween",
           }}
          
        >
          <Image
            className="object-cover object-center rounded max-h-[700px]"
            alt="hero"
            src="/kelvin.jpeg"
            width={920}
            height={150}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
