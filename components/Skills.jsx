import React from "react";
import Image from "next/image";
import Skill from "./Skill";

const Skills = (props) => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#587B7F]">
          My Skills
        </p>
        <h2 className="py-4">I love to work with</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill
            image={
              <Image
                src="/../public/assets/skills/react.png"
                width="64px"
                height="64px"
                alt="react logo"
              />
            }
            skill={"REACT"}
          />

          <Skill
            image={
              <Image
                src="/../public/assets/skills/next-js.png"
                width="64px"
                height="64px"
                alt="nextjs logo"
              />
            }
            skill={"NEXT JS"}
          />

          <Skill
            image={
              <Image
                src="/../public/assets/skills/tailwind.png"
                width="64px"
                height="64px"
                alt="tailwind css logo"
              />
            }
            skill={"TAILWIND CSS"}
          />

          <Skill
            image={
              <Image
                src="/../public/assets/skills/firebase.png"
                width="64px"
                height="64px"
                alt="firebase logo"
              />
            }
            skill={"FIREBASE"}
          />

          <Skill
            image={
              <Image
                src="/../public/assets/skills/strapi.png"
                width="64px"
                height="64px"
                alt="strapi logo"
              />
            }
            skill={"STRAPI"}
          />

          <Skill
            image={
              <Image
                src="/../public/assets/skills/wordpress.png"
                width="64px"
                height="64px"
                alt="wordpress logo"
              />
            }
            skill={"WORDPRESS"}
          />

          <Skill
            image={
              <Image
                src="/../public/assets/skills/mongo.png"
                width="64px"
                height="64px"
                alt="mongo db logo"
              />
            }
            skill={"MONGO DB"}
          />

          <Skill
            image={
              <Image
                src="/../public/assets/skills/express.png"
                width="64px"
                height="64px"
                alt="express js logo"
              />
            }
            skill={"EXPRESS JS"}
          />

         
        </div>
      </div>
    </div>
  );
};

export default Skills;
