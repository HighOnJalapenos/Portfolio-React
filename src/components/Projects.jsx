import React from "react";
import PrimeMusicImg from "../assets/PrimeMusic.png";
import QuoraImg from "../assets/Quora.png";
import MovieDeckImg from "../assets/MovieDeck.png";

const Projects = () => {
  return (
    <div
      name="project"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </p>
          <p className="py-6">Some of my recent work and projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${QuoraImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center transition-opacity ease-in duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                Quora Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://quora-clone-psi.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/HighOnJalapenos/QuoraClone"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${PrimeMusicImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center transition-opacity ease-in duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                Prime Music Clone
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://prime-music-clone.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/HighOnJalapenos/PrimeMusicProject"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${MovieDeckImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center transition-all duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Deck
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://highonjalapenos.github.io/Movie-Deck-Project/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/HighOnJalapenos/Movie-Deck-Project"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
