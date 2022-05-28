import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = (props) => {
  return (
    <div id="work" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#587B7F]">
          My Work
        </p>
        <h2 className="py-4">What makes me proud </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Project title 1"
            backgroundImage={propertyImg}
            projectUrl="/property"
          />
               <ProjectItem
            title="Project title 2"
            backgroundImage={cryptoImg}
            projectUrl="/property"
          />
               <ProjectItem
            title="Project title 3"
            backgroundImage={netflixImg}
            projectUrl="/property"
          />
               <ProjectItem
            title="Project title 4"
            backgroundImage={twitchImg}
            projectUrl="/property"
          />
        </div>       
      </div>
    </div>
  );
};

export default Projects;
