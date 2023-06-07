import * as React from "react";

type PropsType = {
  heading: string;
  description: string;
  icon: string;
};

const Service: React.FC<PropsType> = function ({ heading, description, icon }) {
  return (
    <div className="service p-8 rounded-2xl flex-1 flex flex-col">
      <span className="text-9xl mx-auto material-symbols-outlined text-white mb-5 select-none self-center">
        {icon}
      </span>
      <p className="text-white font-bold mb-3">{heading}</p>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default Service;
