import * as React from "react";
import logo from "../images/logo.svg";
import { Link } from "gatsby";
import NavComponent from "./NavComponent";
import { useState } from "react";

type PropsType = {
  setContactWindowActive: (val: boolean) => void;
};

const Header: React.FC<PropsType> = function ({ setContactWindowActive }) {
  const [isNavActive, setNavActive] = useState(false);

  return (
    <header className="header flex flex-row px-14 py-5">
      <NavComponent isActive={isNavActive} setActive={setNavActive} />
      <div className="logo w-24 absolute top-3 left-1/2 select-none z-10">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <button
        onClick={() => setContactWindowActive(true)}
        className="header__contact ml-auto background-dark py-2 px-20 text-white select-none rounded-lg text-xl"
      >
        Связаться
      </button>
      <button
        onClick={() => setNavActive(!isNavActive)}
        className="header__burger-menu ml-3 flex items-center"
      >
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>
      <div className="back-block background-main absolute rounded-full -rotate-45 -z-10 "></div>
    </header>
  );
};

export default Header;
