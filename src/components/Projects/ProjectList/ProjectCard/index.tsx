import Link from "next/link";

import { FaGithub, FaShare } from "react-icons/fa";

export const ProjectCard = ({
    id,
    img,
    isNew,
    title,
    kenzie,
    techList,
    description,
    linkGithub,
    publicGithub,
    linkApplication,
    online,
}: any) => {
    return (
        <li id={id} className={`
            flex justify-center
            px-24
            snap-center
        `}>
            <div className="
                flex flex-col
                min-w-[400px] rounded-lg
                bg-grey-800 bg-opacity-20
                border-b-2 border-b-blue-800
                border-l-2 border-l-blue-400
            ">
                <div className="
                    flex justify-center min-h-48 max-h-48
                    bg-grey-900 rounded-lg
                ">
                    {img ? (
                        <img className="
                            object-cover 
                            rounded-tl-lg rounded-tr-lg
                        " src={`./imgs/projects/${img}`} />
                    ) : (
                        <div className="
                            flex items-center
                            w-full h-48
                            rounded-tl-lg rounded-tr-lg
                            bg-grey-800
                        ">
                            <p className="
                                flex justify-center items-center
                                w-full h-16
                                bg-grey-300 bg-opacity-20
                                text-lg font-bold
                            ">Sem imagem</p>
                        </div>
                    )}
                </div>
                <div className="
                    flex flex-col justify-between gap-4 p-4
                    h-full
                ">
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-bold">{title}</h3>
                                <span className="
                                    bg-blue-800 px-4 py-0.5
                                    rounded
                                    text-sm font-bold
                                " hidden={!isNew}>
                                    New
                                </span>
                            </div>
                            {kenzie ? (
                                <p className="text-sm text-grey-300">
                                    {"Projeto criado em "}
                                    <Link className="
                                        no-undeline text-blue-400
                                        hover:underline
                                    " target="_blank" href="https://kenzie.com.br/">
                                        Kenzie Academy Brasil
                                    </Link>
                                </p>
                            ) : null}
                        </div>
                        <div className="
                            flex flex-col gap-4 flex-wrap
                            sm:flex-row
                        ">
                            <p className="text-grey-300">Tecnologias:</p>
                            <ul className="flex gap-2 text-grey-300">
                                {techList?.map((tech: string) => (
                                    <li className="
                                        bg-blue-900 text-grey-200
                                        rounded-md px-2 py-0.5
                                    " key={tech}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-grey-300">
                            {description}
                        </p>
                    </div>
                    <ul className="flex gap-4">
                        {publicGithub ? (
                            <li className="flex items-center gap-2">
                                <FaGithub size={20} />
                                <Link className="hover:underline" target="_blank" href={linkGithub}>
                                    Código no Github
                                </Link>
                            </li>
                        ) : null}
                        {online ? (
                            <li className="flex items-center gap-2">
                                <FaShare size={20} />
                                <Link className="hover:underline" target="_blank" href={linkApplication}>
                                    Aplicação
                                </Link>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
        </li>
    );
};