import * as React from "react"
import logo from "../images/logo.svg"
import {Link} from "gatsby";
import {AnchorLink} from "gatsby-plugin-anchor-links";

function Header() {
    return <header className="header flex flex-row px-14 py-5">
        <nav>
            <AnchorLink to="#about" className="text-xl mr-14">
                О себе
            </AnchorLink>
            <AnchorLink to="#services" className="text-xl mr-14">
                Услуги
            </AnchorLink>
            <AnchorLink to="#portfolio" className="text-xl">
                Портфолио
            </AnchorLink>
        </nav>
        <div className="logo w-24 absolute top-3 left-1/2 select-none z-10">
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
        </div>
        <button className="ml-auto background-dark py-2 px-20 text-white select-none rounded-lg text-xl">Связаться
        </button>
        <div className="back-block background-main absolute rounded-full -rotate-45 -z-10 "></div>
    </header>
}

export default Header;