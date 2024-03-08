import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const AboutIntroduction = () => {
    return (
        <li className="
            flex justify-center
            min-w-full
            snap-center
        ">
            <div className="
                flex flex-col justify-between items-start gap-4
                w-full max-w-6xl
            ">
                <div className="
                    flex flex-col gap-8
                    sm:max-w-[60%]
                ">
                    <div className="
                        flex flex-col justify-between gap-16
                        max-w-xl
                    ">
                        <div className="
                            flex items-center gap-2
                            text-end
                        ">
                            <img
                                src="./imgs/willcley.jpg"
                                className="
                                    max-w-16
                                    rounded-full
                                    border-2 border-blue-400
                                "
                            />
                            <h3 className="text-xl font-bold">
                                Olá, me chamo Willcley
                            </h3>
                        </div>
                    </div>
                    <div className="
                        flex flex-col
                    ">
                        <h1 className="
                            z-10
                            text-4xl font-bold
                        ">
                            {"Desenvolvedor web "}
                            <span className="text-orange-400">Full Stack</span>
                        </h1>
                        <p className="text-grey-300">
                            desenhista | futuro desenvolvedor de jogos
                        </p>
                    </div>
                    <div className="
                        flex flex-col gap-6 pl-4
                        text-lg text-grey-200
                        border-l-2 border-blue-500
                    ">
                        <p>
                            Sou desenvolvedor web full stack. Me formei na Kenzie Academy Brasil, onde aprofundei bastante meus conhecimentos em front-end e back-end.
                        </p>
                    </div>
                </div>
                <div className="
                    flex flex-col items-end gap-2
                    lg:flex-row
                    self-end
                ">
                    <div className="
                        flex gap-2
                    ">
                        <Link
                            href="https://github.com/Willcley"
                            target="_blank"
                            className="
                                font-bold
                            "
                        >
                            <FaGithub
                                size={40}
                                className="
                                    duration-200
                                    rounded-full
                                    text-blue-400 hover:text-grey-100
                                "
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/willcley/"
                            target="_blank"
                            className="
                                font-bold
                            " 
                        >
                            <FaLinkedin
                                size={40}
                                className="
                                    duration-200
                                    rounded-md
                                    text-blue-400 hover:text-blue-500
                                "
                            />
                        </Link>
                    </div>
                    <Link className="
                        duration-200
                        px-4 py-2
                        bg-blue-400 text-blue-900
                        hover:bg-orange-400 hover:text-orange-800
                        font-bold
                        rounded-lg
                    " target="_blank" href="https://docs.google.com/document/d/1TfzS-0yjA_1KyV32L8kGzLTRGvn2It1cAjYIn_O0Yxw/edit">
                        Currículo
                    </Link>
                </div>
            </div>
        </li>
    );
};