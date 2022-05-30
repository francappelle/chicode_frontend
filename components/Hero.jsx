import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 uppercase">
            Welcome to <span className="font-title">Chicode</span>{" "}
          </h1>
          <h2 className="py-2 uppercase text-[#587B7F] font-thin tracking-widest">
            Web Developement
          </h2>

          <p className="py-4 text-[#587B7F] max-w-[70%] mx-auto text-sm uppercase">
            Let's build something awesome?
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/francisco-cappelle/">
                <a target="_blank">
                  <FaLinkedinIn
                    className="hover:text-[#007bb5] ease-in duration-100"
                    size={30}
                  />
                </a>
              </Link>
            </div>
            <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
              <Link href="https://github.com/francappelle">
                <a target="_blank">
                  <FaGithub
                    className="hover:text-[#000] ease-in duration-100"
                    size={30}
                  />
                </a>
              </Link>
            </div>
            <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
              <Link href="https://www.youtube.com">
                <a target="_blank">
                  <BsYoutube
                    className="hover:text-[#ff0000] ease-in duration-100"
                    size={30}
                  />
                </a>
              </Link>
            </div>
            <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300">
              <Link href="https://twitter.com/francIscappelle">
                <a target="_blank">
                  <BsTwitter
                    className="hover:text-[#55acee] ease-in duration-100"
                    size={30}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
