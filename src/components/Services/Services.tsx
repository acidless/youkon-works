import settings from "../../images/settings.svg";
import data from "../../images/data.svg";
import bot from "../../images/bot.svg";
import * as React from "react";
import Service from "./Service";

function Services() {
    return <section className="container mx-auto services mb-28" id="services">
        <h2 className="mb-5 text-2xl">Услуги</h2>
        <div className="justify-between grid grid-cols-3 gap-10">
            <Service heading="Доработки, исправления существующего сайта" description="Внос любых необходимых правок, таких как: визуальные изменения, функциональные
                    изменения, улучшение скорости работы и производительности, добавление контенты." icon={settings}/>
            <Service heading="Создание сайта или веб-приложения" description="Полный цикл разработки сайта, включающий в себя создание дизайна, разработка клиентской
                    и серверной части, а так же деплой сайта на хостинг" icon={data}/>
            <Service heading="Создание ботов" description="Разработка различных ботов для Telegram и Discord."
                     icon={bot}/>
        </div>
    </section>
}

export default Services;