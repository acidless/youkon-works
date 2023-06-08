import kp11Messenger from "../../images/kp11-messenger.png";
import stylemate from "../../images/stylemate.png";
import rubtidnizer from "../../images/rubtidnizer.png";
import * as React from "react";
import Project from "./Project";

function Projects() {
  return (
    <section className="container mx-auto last-projects mb-28" id="portfolio">
      <h2 className="mb-5 text-2xl">Последние проекты</h2>
      <div className="justify-between w-full items-start grid grid-cols-3 gap-10">
        <Project name="Мессенджер для колледжа" image={kp11Messenger} num={1} />
        <Project name="Онлайн гардероб" image={stylemate} num={2} />
        <Project name="Приложение органайзер" image={rubtidnizer} num={3} />
      </div>
    </section>
  );
}

export default Projects;
