import * as React from "react";
import type { PageProps } from "gatsby";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import LeaveMessage from "../components/LeaveMessage";
import { useState } from "react";
import MessageWindow from "../components/MessageWindow";
import telegram from "../images/telegram.svg";
import vk from "../images/vk.svg";
import discord from "../images/discord.svg";
import whatsapp from "../images/whatsapp.svg";
import logo from "../images/logo.svg";

const IndexPage: React.FC<PageProps> = () => {
  const [isContactWindowActive, setContactWindowActive] = useState(false);

  return (
    <>
      <Header setContactWindowActive={setContactWindowActive} />
      <main className="overflow-hidden">
        <About setContactWindowActive={setContactWindowActive} />
        <Services />
        <Projects />
        <LeaveMessage />
        <MessageWindow
          isOpened={isContactWindowActive}
          toggleOpen={setContactWindowActive}
        >
          <div className="window-content grid grid-cols-4 gap-3 items-center">
            <a href="https://t.me/stasrikon" target="_blank" className="button">
              <img className="w-32" src={telegram} alt="" />
            </a>
            <a
              href="https://m.vk.com/xrenilo88"
              target="_blank"
              className="button"
            >
              <img className="w-32" src={vk} alt="" />
            </a>
            <a
              href="https://discordapp.com/users/825265889665482755"
              target="_blank"
              className="button"
            >
              <img className="w-32" src={discord} alt="" />
            </a>
            <a
              href="https://wa.me/79654076593"
              target="_blank"
              className="button"
            >
              <img className="w-32" src={whatsapp} alt="" />
            </a>
          </div>
        </MessageWindow>
      </main>
    </>
  );
};

export default IndexPage;

export function Head() {
  return (
    <>
      <title>Youkon Works</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <link rel="icon" type="image/x-icon" href={logo} />
    </>
  );
}
