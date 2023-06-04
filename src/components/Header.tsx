import * as React from "react"
import logo from "../images/logo.svg"

function Header(){
    return <header className="flex flex-row px-8 py-5">
        <p className="text-xl mr-14">О себе</p>
        <p className="text-xl mr-14">Портфолио</p>
        <p className="text-xl">Услуги</p>
        <img className="w-24 absolute top-3 left-1/2 select-none z-10" src={logo} alt=""/>
        <button className="ml-auto background-dark py-2 px-14 text-white select-none rounded-lg">Связаться</button>
        <div className="back-block background-main absolute rounded-full -rotate-45"></div>
    </header>
}

export default Header;