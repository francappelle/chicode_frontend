import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#587B7F]">
            About me
          </p>
          <h2 className="py-4">Who am I</h2>
          <p className="py-2">
            Hi! My name's Francisco. I'm a family man who loves to code.
          </p>
          <p className="py-2">
            Born and raised in a small town in central Portugal, I soon
            discovered a passion for technology and computers.
          </p>
          <p className="py-2">
            I remember the day that big cardbox with a computer came home like
            it was today and the time I spent trying to understand the code so
            that everything made sense and worked as I needed to.
          </p>
          <p className="py-2">
            Nowadays I dedicate my time to learning various programming
            languages such as JavaScript, Rexx and Python, to the knowledge of
            the various technologies and frameworks that allow us to facilitate
            the process of creating websites and web apps and their developement
            by building unique user experiences.
          </p>
          <p className="py-2">
            I am available for freelance jobs.
          </p>
          <p className="py-2">
            If you want to build something beautiful feel free to reach me.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/*  <Image src="/../public/assets/about-me.png" alt="" width={900} height={800}/>*/}
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735"
            alt="Think outside of the box image. yellow bench"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
