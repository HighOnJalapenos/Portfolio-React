import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { scroller } from "react-scroll";

const Home = () => {
  const handleClick = () => {
    scroller.scrollTo("project", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: 50,
    });
  };
  return (
    <div name="home" className="bg-[#0a192f] h-screen w-full">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Digvijay Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer
        </h2>
        <p className="py-4 max-w-[700px] text-[#8892b0]">
          I am well versed in HTML, CSS, and JavaScript with projects under my
          belt utilising technologies such as React and Tailwind. I am eager to
          embark on a journey of innovation and continuous learning in the
          dynamic world of web development.
        </p>
        <div>
          <button
            onClick={handleClick}
            className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-colors duration-300"
          >
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
