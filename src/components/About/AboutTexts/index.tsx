import Link from "next/link";

export const AboutTexts = () => {
    return (
        <li className="
            flex justify-center
            min-w-full
            border-2 border-red-600
            snap-center
        ">
            <div className="
                flex flex-col justify-between items-start gap-4
                w-full max-w-6xl
            ">
                <div className="
                    flex flex-col gap-6 pl-4
                    text-lg text-grey-200
                    border-l-2 border-blue-500
                ">
                    <p>
                        Sou desenvolvedor web full stack. Me formei na Kenzie Academy Brasil, onde aprofundei bastante meus conhecimentos em front-end e back-end.
                    </p>
                    <p>
                        O que me fez me aproximar da programação foi o meu interesse em criar meus próprios jogos. Acabei focando meu aprendizado na área web, por ter sido o mais acessível pra mim na época em que comecei, e agora gosto muito dessa área também.
                    </p>
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
                        transition-[4s]
                        hover:bg-grey-100 hover:text-grey-900
                    " target="_blank" href="https://docs.google.com/document/d/1TfzS-0yjA_1KyV32L8kGzLTRGvn2It1cAjYIn_O0Yxw/edit">
                        Currículo
                    </Link>
                    <Link className="
                        px-4 py-2
                        bg-blue-400 text-blue-900
                        font-bold
                        rounded-lg
                        transition-[4s]
                        hover:bg-grey-900 hover:text-white
                    " target="_blank" href="https://github.com/Willcley">
                        GitHub
                    </Link>
                    <Link className="
                        px-4 py-2
                        bg-blue-400 text-blue-900
                        font-bold
                        rounded-lg
                        transition-[4s]
                        hover:bg-blue-500 hover:text-white
                    " target="_blank" href="https://www.linkedin.com/in/willcley/">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </li>
    );
};