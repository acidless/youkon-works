import * as React from "react"
import type {PageProps} from "gatsby"
import Header from "../components/Header";
import settings from "../images/settings.svg"
import data from "../images/data.svg"
import bot from "../images/bot.svg"
import kp11Messenger from "../images/kp11-messenger.png"

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header/>
            <main className="overflow-hidden">
                <section className="container mx-auto about mb-28">
                    <h1 className="text-5xl mb-4">Давайте сотрудничать!</h1>
                    <p className="text-xl max-w-xl mb-4">Привет, меня зовут Олег, я веб-разработчик с опытом более 4
                        лет.</p>
                    <button
                        className="ml-auto background-main py-2 px-20 text-white select-none rounded-lg text-xl">Написать
                    </button>
                </section>
                <section className="container mx-auto services mb-28">
                    <h2 className="mb-5">Услуги</h2>
                    <div className="flex content-between justify-between">
                        <div className="service p-8 rounded-2xl mr-10 flex-1">
                            <img className="mx-auto mb-5 h-32 w-auto" src={settings} alt="website-changes"/>
                            <p className="text-white font-bold mb-3">
                                Доработки, исправления существующего сайта.
                            </p>
                            <p className="text-white">
                                Внос любых необходимых правок, таких как: визуальные изменения, функциональные
                                изменения, улучшение скорости работы и производительности, добавление контенты.
                            </p>
                        </div>
                        <div className="service p-8 rounded-2xl mr-10 flex-1">
                            <img className="mx-auto mb-5 h-32 w-auto" src={data} alt="website-creation"/>
                            <p className="text-white font-bold mb-3">
                                Создание сайта или веб-приложения.
                            </p>
                            <p className="text-white">
                                Полный цикл разработки сайта, включающий в себя создание дизайна, разработка клиентской
                                и серверной части, а так же деплой сайта на хостинг.
                            </p>
                        </div>
                        <div className="service p-8 rounded-2xl flex-1">
                            <img className="mx-auto mb-5 h-32 w-auto" src={bot} alt="bot-creation"/>
                            <p className="text-white font-bold mb-3">
                                Создание ботов.
                            </p>
                            <p className="text-white">
                                Разработка различных ботов для Telegram и Discord.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto last-projects mb-28">
                    <h2 className="mb-5">Последние проекты</h2>
                    <div className="flex justify-between w-full items-start">
                        <div className="project relative mr-10 w-full">
                            <img className="w-full mb-3" src={kp11Messenger} alt="kp11-messenger"/>
                            <span className="text-white py-1 px-3 rounded-md text-4xl">1</span>
                            <p className="text-xl">Мессенджер для колледжа</p>
                        </div>
                        <div className="project relative mt-10 mr-10 w-full">
                            <img className="w-full mb-3" src={kp11Messenger} alt="kp11-messenger"/>
                            <span className="text-white py-1 px-3 rounded-md text-4xl">2</span>
                            <p className="text-xl">Мессенджер для колледжа</p>
                        </div>
                        <div className="project relative mt-20 w-full">
                            <img className="w-full mb-3" src={kp11Messenger} alt="kp11-messenger"/>
                            <span className="text-white py-1 px-3 rounded-md text-4xl">3</span>
                            <p className="text-xl">Мессенджер для колледжа</p>
                        </div>
                    </div>
                </section>
                <section className="leave-message container mx-auto relative mb-28">
                    <h2 className="mb-5">Оставить сообщение</h2>
                    <form className="inline-block">
                        <div className="fields-wrapper mb-5">
                            <input className="border mr-5 px-2 py-1 rounded-md border-zinc-300" type="text" name="name" placeholder="Имя"/>
                            <input className="border px-2 py-1 rounded-md border-zinc-300" type="email" name="email" placeholder="Почта"/>
                        </div>
                        <textarea className="border px-2 py-1 rounded-md w-full mb-3 border-zinc-300" name="message" placeholder="Сообщение"></textarea>
                        <button className="ml-auto background-main py-2 px-20 text-white select-none rounded-lg text-xl w-full">Связаться</button>
                    </form>
                    <div className="back-block-2 background-main absolute rounded-full rotate-45 -z-10"></div>
                </section>
            </main>
        </>

    )
}

export default IndexPage

export function Head() {
    return <>
        <title>Youkon Works</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Playfair+Display:wght@700&display=swap"
            rel="stylesheet"/>
    </>
}
