
"use client"
import React from "react";

const Contact = () => {
  
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 bg-gray-900 rounded-lg overflow-hidden flex items-end justify-start relative min-h-[400px]">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.17044271369!2d36.764995685554986!3d-1.30303597808607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1762456106955!5m2!1sen!2ske"/>
          <div className="bg-gray-900 relative flex flex-col sm:flex-row flex-wrap py-6 rounded shadow-md w-full p-4 sm:p-6">
            <div className="w-full sm:w-1/2 lg:w-[30%] px-4 sm:px-6 mb-4 sm:mb-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-300">
                Nairobi, <br />
                Kenya
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 px-4 sm:px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:kelvin.mutuota.mwangi@gmail.com" className="text-indigo-400 leading-relaxed break-words block">
                kelvin.mutuota.mwangi@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-300 break-words">0712704936</p>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/mdopyzay"
          method="Post"
          name="contact"
          className="w-full lg:w-1/3 flex flex-col"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-300 break-words">
          I'm currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="kelvin"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            value="submit here"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
