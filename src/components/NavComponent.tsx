import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as React from "react";

type PropsType = {
  isActive: boolean;
  setActive: (val: boolean) => void;
};

const NavComponent: React.FC<PropsType> = function ({ isActive, setActive }) {
  return (
    <nav
      className={`nav relative grid grid-cols-3 gap-14${
        isActive ? " active" : ""
      }`}
    >
      <AnchorLink to="#about" className="text-xl">
        О себе
      </AnchorLink>
      <AnchorLink to="#services" className="text-xl">
        Услуги
      </AnchorLink>
      <AnchorLink to="#portfolio" className="text-xl">
        Портфолио
      </AnchorLink>
      <button className="nav__close" onClick={() => setActive(false)}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </nav>
  );
};

export default NavComponent;
