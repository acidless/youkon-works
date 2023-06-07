import * as React from "react"
import type {PageProps} from "gatsby"
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import LeaveMessage from "../components/LeaveMessage";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header/>
            <main className="overflow-hidden">
                <About/>
                <Services/>
                <Projects/>
                <LeaveMessage/>
            </main>
        </>

    )
}

export default IndexPage

export function Head() {
    return <>
        <title>Youkon Works</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Playfair+Display:wght@700&display=swap"
            rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    </>
}
