import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I am Digvijay, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            Transitioning from finance to web development, I bring a strong
            analytical mindset, problem-solving abilities, and attention to
            detail. I am skilled in the front-end technologies such as HTML, CSS
            and JavaScript. I have further honed my skills by working on many
            projects and solving Data Structure and Algorithm based questions on
            multiple platforms. Beyond technical expertise, my transition has
            taught me the value of adaptability and continuous learning. I'm
            excited to contribute my unique blend of skills and passion for
            innovation. Let's connect and create exceptional web experiences
            together!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
