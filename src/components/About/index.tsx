import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiZod, SiExpress } from "react-icons/si";
import { TechCard } from "./TechCard";
import Link from "next/link";

export const About = () => {
    return (
        <section id="about" className="
            flex justify-center
            min-w-full p-8
        ">
            <div className="
                flex justify-between
                w-full max-w-6xl
            ">
                <div className="flex flex-col justify-between">
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
                            {"Eu "}
                            <span className="text-orange-400">amo</span>
                            {" criar e "}
                            <span className="text-orange-400">desenvolver</span> 
                            {" projetos"}
                        </h1>
                        <p className="text-xl">
                            Sou desenvolvedor Full Stack, formado pela Kenzie Academy Brasil
                        </p>
                    </div>
                    <div className="
                        flex gap-2
                    ">
                        <Link className="
                            px-4 py-2
                            bg-blue-400 text-blue-900
                            font-bold
                            rounded-lg
                            hover:bg-orange-500 hover:text-white
                        " target="_blank" href="">
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
                    flex self-end flex-col items-center gap-4 px-4 py-2 mt-48
                    border-2 rounded-xl border-blue-400
                ">
                    <div className="
                        flex flex-col items-center gap-2
                    ">
                        <h3 className="text-xl font-bold">Tecnologias:</h3>
                        <ul className="
                            flex justify-center gap-2 flex-wrap
                        ">
                            <TechCard
                                icon={<FaReact size={40} />}
                                title="React"
                                link="https://react.dev"
                            />
                            <FaHtml5 title="HTML" size={40} />
                            <IoLogoCss3 title="CSS" size={40} />
                            <FaSass title="SASS" size={40} />
                            <BiLogoJavascript title="JavaScript" size={40} />
                            <BiLogoTypescript title="TypeScript" size={40} />
                            <SiZod title="Zod" size={40} />
                            <SiExpress title="Express" size={40} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};