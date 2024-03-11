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
                bg-grey-850
                border-b-2 border-b-blue-800
                border-l-2 border-l-blue-400
            `}>
                <div className="
                    relative
                    flex justify-center min-h-48 max-h-48
                    bg-grey-900 rounded-lg
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
                            bg-grey-800
                        `}>
                            <p className={`
                                flex justify-center items-center
                                duration-200
                                w-full ${moreInfo ? "h-full" : "h-16"}
                                bg-grey-300 bg-opacity-20
                                text-lg font-bold
                            `}>Sem imagem</p>
                        </div>
                    )}
                </div>
                <div className="
                    flex flex-col justify-between gap-4 p-4
                    min-h-[240px] h-full
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
                                        bg-blue-900 text-grey-200
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
                                bg-grey-300 bg-opacity-20
                                hover:bg-opacity-40
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
                relative
                flex-col justify-between
                duration-200 ease-linear
                ${moreInfo ? "p-4" : "p-0"}
                ${moreInfo ? "w-[600px]" : "w-0"}
                rounded-tr-lg rounded-br-lg
                bg-grey-300 bg-opacity-20
                backdrop-blur-sm
                border-b-2 border-grey-100 border-opacity-40
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
                        bg-blue-900 bg-opacity-40
                    ">
                        {type}
                    </span>
                    <p className={`
                        text-justify
                        p-8 h-full
                        text-grey-200
                    `}>
                        {description}
                    </p>
                    <p className="
                        absolute bottom-0 right-0
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
                        w-full
                        border border-grey-300 border-opacity-40"
                    />
                    <h4 className="mb-4 text-grey-100">Tecnologias:</h4>
                    <ul className="
                        flex justify-center gap-2 flex-wrap
                        text-grey-300
                    ">
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
            </div>
        </li>
    );
};