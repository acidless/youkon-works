import * as React from "react"
import type {PageProps} from "gatsby"
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Header/>
            <main>

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
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet"/>
    </>
}
