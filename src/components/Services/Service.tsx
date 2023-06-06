import * as React from "react";

type PropsType = {
    heading: string;
    description: string;
    icon: string;
}

const Service: React.FC<PropsType> = function ({heading, description, icon}) {
    return <div className="service p-8 rounded-2xl flex-1">
        <img className="mx-auto mb-5 h-32 w-auto" src={icon} alt="website-changes"/>
        <p className="text-white font-bold mb-3">
            {heading}
        </p>
        <p className="text-white">
            {description}
        </p>
    </div>
}

export default Service;