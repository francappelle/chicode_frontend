import React from "react";

const Skill = (props) => {
  return (
    <div>
      <div className="p-6 shadow rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">{props.image}</div>
          <div className="flex flex-col items-center justify-center">
            <h3>{props.skill}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
