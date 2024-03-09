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
                    pt-8
                    sm:max-w-[60%]
                ">
                    <div className="
                        flex items-center gap-2
                    ">
                        <img
                            src="./imgs/willcley.jpg"
                            className="
                                max-w-16
                                rounded-full
                                border-2 border-grey-850
                                shadow-around-md-blue-400
                            "
                        />
                        <h3 className="
                            text-md font-bold
                            sm:text-xl
                        ">
                            Olá, me chamo Willcley!
                        </h3>
                    </div>
                    <div className="
                        flex flex-col
                    ">
                        <h1 className="
                            z-10
                            text-3xl font-bold
                            sm:text-5xl
                        ">
                            {"Desenvolvedor web "}
                            <span className="
                                text-orange-400
                            ">
                                Full Stack
                            </span>
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
                    lg:flex-row lg:items-center
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
                                    text-blue-400 hover:text-opacity-60
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
                                    text-blue-400 hover:text-opacity-60
                                "
                            />
                        </Link>
                    </div>
                    <Link className="
                        duration-200
                        px-4 py-2
                        rounded-lg
                        text-blue-400
                        hover:bg-blue-800 hover:bg-opacity-20
                        border-2 border-blue-400
                        font-bold
                    " target="_blank" href="https://docs.google.com/document/d/1TfzS-0yjA_1KyV32L8kGzLTRGvn2It1cAjYIn_O0Yxw/edit">
                        Currículo
                    </Link>
                </div>
            </div>
        </li>
    );
};