import * as React from "react";

type PropsType = {
    name: string;
    image: string;
    num: number;
}

const Project: React.FC<PropsType> = function ({name, image, num}) {
    return <div className="project relative w-full" style={{marginTop: (num - 1) * 40 + "px"}}>
        <img className="w-full mb-3" src={image} alt="kp11-messenger"/>
        <span className="text-white py-1 px-3 rounded-md text-4xl">{num}</span>
        <p className="text-xl">{name}</p>
    </div>
}

export default Project;