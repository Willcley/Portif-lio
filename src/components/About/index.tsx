import { TechCard } from "./TechCard";
import { techList } from "../../databases/techList";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const About = () => {
    return (
        <section id="about" className="
            relative
            flex justify-center
            min-w-full p-8
        ">
            <div className="
                z-50
                flex flex-col justify-between items-start gap-4
                w-full max-w-6xl
            ">
                <div className="
                    flex flex-col justify-between gap-16
                    max-w-xl
                ">
                    <div className="flex flex-col gap-4">
                        <div className="
                            flex items-center gap-4
                        ">
                            <img className="max-w-16 rounded-full" src="./imgs/willcley.jpg" />
                            <h3 className="text-xl font-bold">
                                Olá, me chamo Willcley
                            </h3>
                        </div>
                        <h1 className="text-3xl font-bold">
                            {"Desenvolvedor Web "}
                            <span className="text-orange-400">Full Stack</span>
                        </h1>
                        <div className="
                            flex flex-col gap-6 pl-4
                            text-lg text-grey-200
                            border-l-2 border-blue-500
                        ">
                            <p>
                                Olá, sou desenvolvedor web full stack. Me formei na Kenzie Academy Brasil, onde aprofundei bastante meus conhecimentos em front-end e back-end.
                            </p>
                            <p>
                                O que me fez me aproximar da programação foi o meu interesse em criar meus próprios jogos. Acabei focando meu aprendizado na área web, por ter sido o mais acessível pra mim na época em que comecei, e agora gosto muito dessa área também.
                            </p>
                        </div>
                    </div>
                    <div className="
                        flex flex-col gap-2
                        text-center
                        sm:flex-row
                    ">
                        <Link className="
                            px-4 py-2
                            bg-blue-400 text-blue-900
                            font-bold
                            rounded-lg
                            hover:bg-orange-500 hover:text-white
                        " target="_blank" href="" hidden={true}>
                            Ver Projetos
                        </Link>
                        <Link className="
                            px-4 py-2
                            bg-blue-400 text-blue-900
                            font-bold
                            rounded-lg
                            hover:bg-grey-100 hover:text-grey-900
                        " target="_blank" href="https://docs.google.com/document/d/1TfzS-0yjA_1KyV32L8kGzLTRGvn2It1cAjYIn_O0Yxw/edit">
                            Currículo
                        </Link>
                        <Link className="
                            px-4 py-2
                            bg-blue-400 text-blue-900
                            font-bold
                            rounded-lg
                            hover:bg-grey-900 hover:text-white
                        " target="_blank" href="https://github.com/Willcley">
                            GitHub
                        </Link>
                        <Link className="
                            px-4 py-2
                            bg-blue-400 text-blue-900
                            font-bold
                            rounded-lg
                            hover:bg-blue-500 hover:text-white
                        " target="_blank" href="https://www.linkedin.com/in/willcley/">
                            LinkedIn
                        </Link>
                    </div>
                </div>
                <div className="
                    flex flex-col items-center gap-4
                    px-4 py-2 max-w-xl
                    border-2 rounded-xl border-blue-400
                ">
                    <div className="
                        flex flex-col items-center gap-2
                    ">
                        <h3 className="text-xl font-bold">Tecnologias:</h3>
                        <ul className="
                            flex justify-center gap-2 flex-wrap pb-2 px-2
                        ">
                            {techList.length > 0 ? techList.map((tech) => (
                                <TechCard tech={tech} key={tech.title} />
                            )) : <p>Lista de tecnologias não encontrada!</p>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="
                absolute top-0 right-0
                z-10
                w-2/5 min-h-full
            ">
                <div className="
                    z-0
                ">
                    <Image
                        src="/imgs/codeWallpaper.jpg"
                        alt="code"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="
                    absolute top-0 right-0
                    min-w-full min-h-full z-10
                    bg-gradient-to-r from-grey-850 to-transparent
                "></div>
            </div>
        </section>
    );
};