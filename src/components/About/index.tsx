import Image from "next/image";
import { AboutTexts } from "./AboutTexts";
import { AboutTech } from "./AboutTech";
import { AboutIntroduction } from "./AboutIntroduction";
import { useRef, useState } from "react";
import { AboutNavButton } from "./AboutNavButton";

export const About = ({ about }: any) => {
    const [ screenAbout, setScreenAbout ] = useState("intro");
    const aboutScroll = useRef<null | HTMLUListElement>(null)

    return (
        <section ref={about} className="
            relative flex
            min-w-full min-h-[600px]
        ">
            <ul 
                ref={aboutScroll}
                className="
                    z-10 flex gap-8 p-8
                    overflow-x-hidden
                    snap-x snap-mandatory
                "
            >
                <AboutIntroduction />
                <AboutTexts />
                <AboutTech />
            </ul>
            <nav className="
                absolute bottom-0 z-10
                sm:w-full
            ">
                <ul className="
                    flex flex-col items-start
                    sm:flex-row sm:justify-center sm:gap-4
                    backdrop-blur-sm
                ">
                    <AboutNavButton
                        text="início"
                        value="intro"
                        position={0}
                        scrollRef={aboutScroll}
                        screenAbout={screenAbout}
                        setScreenAbout={setScreenAbout}
                    />
                    <AboutNavButton
                        text="sobre"
                        value="about"
                        position={1}
                        scrollRef={aboutScroll}
                        screenAbout={screenAbout}
                        setScreenAbout={setScreenAbout}
                    />
                    <AboutNavButton
                        text="tecnologias"
                        value="tech"
                        position={2}
                        scrollRef={aboutScroll}
                        screenAbout={screenAbout}
                        setScreenAbout={setScreenAbout}
                    />
                </ul>
            </nav>
        </section>
    );
};