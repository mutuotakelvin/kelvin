"use client"
import React,{useEffect} from "react";
import { FaRegUser } from "react-icons/fa";
import { testimonials } from "../constants/data";
import { MdOutlineTerminal } from "react-icons/md";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '@/context/active-section-context';

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.75
  })
  const { setActive, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000){
      setActive('Testimonials')
    }
  }, [inView, setActive, timeOfLastClick])
  
  return (
    <section
    ref={ref}
     id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <FaRegUser className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full" key={testimonial}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <MdOutlineTerminal className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    width={100}
                    height={100}
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
