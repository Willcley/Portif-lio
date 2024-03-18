import Link from "next/link";
import { useEffect, useState } from "react";

import { FaGithub, FaShare } from "react-icons/fa";

export const ProjectCard = ({
    cardNumber,
    setCardNumber,
    setSeeMore,
    id,
    img,
    isNew,
    title,
    type,
    kenzie,
    framework,
    techList,
    description,
    finishedAt,
    linkGithub,
    publicGithub,
    linkApplication,
    online,
}: any) => {
    const [ moreInfo, setMoreInfo ] = useState(false);
    const [ contentInfo, setContentInfo ] = useState(false);
    const [ opacityInfo, setOpacityInfo ] = useState(false);

    useEffect(() => {
        if (cardNumber !== id) {
            setSeeMore(false);
            setMoreInfo(false);
            setContentInfo(false);
            setOpacityInfo(false);
        };
    }, [cardNumber]);

    const MoreInfo = () => {
        if (cardNumber === id) {
            if (moreInfo) {
                setSeeMore(false);
                setMoreInfo(false);
                setContentInfo(false);
                setOpacityInfo(false);
            } else {
                setSeeMore(true);
                setMoreInfo(true);
                setTimeout(() => setContentInfo(true), 200);
                setTimeout(() => setOpacityInfo(true), 300);
            };
        };
    };

    return (
        <li id={`project${id}`}
            className={`
                ${cardNumber !== id ? "cursor-pointer" : null}
                flex justify-center
                snap-center
            `}
            onClick={() => {
                if (cardNumber !== id) {
                    setCardNumber(id);
                }
            }}
        >
            <div id={`projectCard${id}`} className={`
                flex flex-col
                min-w-[240px] max-w-[400px] sm:min-w-[400px]
                rounded-tl-lg rounded-bl-lg
                rounded-tr-lg rounded-br-lg
                ${!moreInfo ? (
                    "lg:rounded-tr-lg lg:rounded-br-lg"
                ) : "lg:rounded-tr-none lg:rounded-br-none"}
                bg-gradient-to-r from-blue-200 to-blue-100
                dark:from-grey-blue-900 dark:to-grey-blue-800
                border-b-2 border-b-blue-200
                dark:border-b-grey-blue-800
            `}>
                <div className="
                    relative
                    flex justify-center min-h-48 max-h-48
                    rounded-lg
                ">
                    {img ? (
                        <img className={`
                            object-cover
                            rounded-tl-lg rounded-tr-lg
                            ${!moreInfo ? "lg:rounded-tr-lg" : "lg:rounded-tr-none"}
                        `} src={`./imgs/projects/${img}`} />
                    ) : (
                        <div className={`
                            flex items-center
                            w-full h-48
                            rounded-tl-lg rounded-tr-lg
                            ${!moreInfo ? "lg:rounded-tr-lg" : "lg:rounded-tr-none"}
                        `}>
                            <p className={`
                                flex justify-center items-center
                                w-full ${moreInfo ? "h-full" : "h-16"}
                                w-full ${moreInfo ? "rounded-tl-lg" : null}
                                text-4xl font-bold italic
                                text-blue-300 dark:text-grey-blue-700
                            `}>
                                Sem imagem
                            </p>
                        </div>
                    )}
                </div>
                <div className="
                    flex flex-col justify-between gap-4 p-4
                    min-h-[240px] h-full
                    text-grey-900 dark:text-grey-100
                ">
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-bold">{title}</h3>
                                <span className="
                                    px-4 py-0.5
                                    rounded
                                    bg-blue-300 dark:bg-blue-800
                                    text-sm font-bold
                                " hidden={!isNew}>
                                    New
                                </span>
                            </div>
                            {kenzie ? (
                                <p className="text-sm text-grey-700 dark:text-grey-300">
                                    {"Projeto criado em "}
                                    <Link className="
                                        no-undeline
                                        text-blue-500 dark:text-blue-400
                                        hover:underline
                                    " target="_blank" href="https://kenzie.com.br/">
                                        Kenzie Academy Brasil
                                    </Link>
                                </p>
                            ) : null}
                        </div>
                    </div>
                    <div className="
                        flex justify-between items-center
                    ">
                        <p className="
                            flex items-center gap-2
                        ">
                            {framework ? (
                                <>
                                    Framework:
                                    <span className="
                                        bg-blue-300 dark:bg-blue-800
                                        rounded-md px-2 py-0.5
                                    ">
                                        {framework}
                                    </span>
                                </>
                            ) : "Sem Framework"}
                        </p>
                        <button
                            className="
                                hidden lg:block
                                px-4 py-1
                                rounded
                                bg-blue-300 dark:bg-blue-800
                                bg-opacity-20 hover:bg-opacity-40
                                dark:bg-opacity-20 dark:hover:bg-opacity-40
                            "
                            onClick={MoreInfo}
                        >
                            {moreInfo ? "Ler Menos" : "Ler Mais"}
                        </button>
                    </div>
                    <ul className="
                        flex flex-col gap-4
                        sm:flex-row
                    ">
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
                                    {type === "back-end" ? "Documentação" : "Aplicação"}
                                </Link>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
            <div className={`
                hidden lg:flex
                border-b-2 border-opacity-40
                border-blue-200 dark:border-grey-blue-800
                rounded-tr-lg rounded-br-lg
                bg-gradient-to-r from-blue-100 to-grey-blue-100
                dark:from-grey-blue-800 dark:to-grey-900
                backdrop-blur-sm
            `}>
                <div className={`
                    relative
                    flex flex-col justify-between
                    duration-200 ease-linear
                    ${moreInfo ? "p-4" : "p-0"}
                    ${moreInfo ? "w-[600px]" : "w-0"}
                `}>
                    <div className={`
                        relative
                        ${!contentInfo ? "hidden" : null}
                        ${opacityInfo ? "opacity-100" : "opacity-0"}
                        duration-200
                        flex flex-col items-center text-center gap-8
                        h-full max-h-full
                    `}>
                        <span className="
                            px-4 py-1
                            rounded-md
                            bg-blue-400 bg-opacity-20
                            dark:bg-blue-500 dark:bg-opacity-20
                            text-grey-900 dark:text-grey-100
                        ">
                            {type}
                        </span>
                        <p className={`
                            text-justify
                            p-8 h-full
                            text-grey-800 dark:text-grey-200
                        `}>
                            {description}
                        </p>
                        <p className="
                            absolute bottom-0 right-0
                            text-grey-900 dark:text-grey-100
                        ">
                            {finishedAt}
                        </p>
                    </div>
                    <div className={`
                        ${!contentInfo ? "hidden" : null}
                        ${opacityInfo ? "opacity-100" : "opacity-0"}
                        duration-300
                        flex flex-col items-center gap-4
                    `}>
                        <hr className="
                            w-full border
                            border-blue-200 dark:border-grey-blue-800"
                        />
                        <h4 className="
                            mb-4
                            text-grey-900 dark:text-grey-100
                        ">
                            Tecnologias:
                        </h4>
                        <ul className="
                            flex justify-center gap-2 flex-wrap
                        ">
                            {techList?.map((tech: string) => (
                                <li className="
                                    px-2 py-0.5 rounded-md
                                    bg-blue-300 dark:bg-blue-800
                                    text-grey-900 dark:text-grey-100
                                " key={tech}>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};