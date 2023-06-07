import * as React from "react";

function LeaveMessage() {
    return <section className="leave-message container mx-auto relative mb-28">
        <h2 className="mb-5 text-2xl">Оставить сообщение</h2>
        <form className="inline-block">
            <div className="fields-wrapper mb-5 flex">
                <input className="border mr-5 px-2 py-1 rounded-md border-zinc-300 flex-1 min-w-0" type="text"
                       name="name"
                       placeholder="Имя"/>
                <input className="border px-2 py-1 rounded-md border-zinc-300 flex-1 min-w-0" type="email" name="email"
                       placeholder="Почта"/>
            </div>
            <textarea className="border px-2 py-1 rounded-md w-full mb-3 border-zinc-300" name="message"
                      placeholder="Сообщение"></textarea>
            <button
                className="ml-auto background-main py-2 px-20 text-white select-none rounded-lg text-xl w-full">Связаться
            </button>
        </form>
        <div className="back-block-2 background-main absolute rounded-full rotate-45 -z-10"></div>
    </section>
}

export default LeaveMessage;