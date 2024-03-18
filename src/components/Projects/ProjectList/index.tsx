"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { TProject } from "@/interfaces/projects.interfaces";

export const ProjectList = ({ projectList }: any) => {
    const [ cardNumber, setCardNumber ] = useState(0);
    const [ seeMore, setSeeMore ] = useState(false);
    const [ cardSpacig, setCardSpacing ] = useState(398);

    const scrollProjects = useRef<null | HTMLUListElement>(null);
    const projectCard0 = scrollProjects.current?.querySelector("#projectCard0");

    useEffect(() => {
        setTimeout(() => {
            scrollProjects.current?.scroll({
                left: cardNumber * (192 + cardSpacig), 
                behavior: "smooth",
            });
        }, seeMore ? 400 : 0);
    }, [cardNumber]);

    useEffect(() => {
        setCardSpacing(projectCard0?.clientWidth || 234);
    }, [projectCard0?.clientWidth]);

    return (
        <div className="
            relative
            flex flex-col items-center
            w-full
        ">
            <ul
                ref={scrollProjects}
                className={`
                    relative
                    duration-300
                    flex gap-48
                    px-[50%]
                    w-full
                    overflow-x-hidden
                    snap-x snap-mandatory
                    list-none
                `
            }>
                {projectList.length > 0 ? projectList.map(
                    (project: TProject, i: number) => (
                        <ProjectCard
                            key={i}
                            cardNumber={cardNumber}
                            setCardNumber={setCardNumber}
                            setSeeMore={setSeeMore}
                            id={i}
                            img={project.img}
                            isNew={project.isNew}
                            title={project.title}
                            type={project.type}
                            kenzie={project.kenzie}
                            framework={project.framework}
                            techList={project.techList}
                            description={project.description}
                            finishedAt={project.finishedAt}
                            linkGithub={project.linkGithub}
                            publicGithub={project.publicGithub}
                            linkApplication={project.linkAppliaction}
                            online={project.online}
                        />
                    )
                ) : <p>Lista vazia...</p>}
            </ul>
            <div className="
                relative
                flex justify-center items-center
                p-0 m-0 mt-4 mb-12 sm:mb-0
                w-full max-w-6xl h-12
            ">
                <button
                    className="
                        relative
                        w-full h-full outline-none
                    "
                    onClick={() => {
                        if (cardNumber > 0) {
                            setCardNumber(cardNumber - 1);
                        } else {
                            setCardNumber((projectList.length - 1));
                        };
                    }}
                >
                    <div className="
                        absolute top-0
                        w-full h-full
                        opacity-40
                        hover:bg-gradient-to-r hover:from-blue-500
                        dark:hover:bg-gradient-to-r dark:hover:from-blue-400
                    ">
                    </div>
                    {`<`}
                </button>
                <ul className="
                    absolute sm:relative
                    top-12 sm:top-0
                    flex justify-center items-center flex-wrap
                    w-full h-full
                ">
                    {projectList.length > 0 ? projectList.map(
                        (project: TProject, i: number) => (
                            <li key={`radio${i}`} className="
                                flex justify-center items-center
                                w-8 h-8
                            ">
                                <div className="
                                    flex justify-center items-center
                                    rounded-full
                                    border-2 border-grey-100
                                    dark:border-grey-900
                                    ring-2 ring-blue-500 dark:ring-blue-400
                                ">
                                    <input
                                        id={`radio${i}`}
                                        type="radio"
                                        name="radio"
                                        hidden={true}
                                        className="peer"
                                        checked={cardNumber === i ? true : false}
                                        onChange={() => setCardNumber(i)}
                                    />
                                    <label
                                        htmlFor={`radio${i}`}
                                        className="
                                            cursor-pointer
                                            duration-200
                                            p-2 peer-checked:p-3
                                            rounded-full
                                            hover:bg-blue-500 dark:hover:bg-blue-400
                                            peer-checked:bg-blue-500
                                            dark:peer-checked:bg-blue-400
                                        "
                                    ></label>
                                </div>
                            </li>
                        )
                    ) : null}
                </ul>
                <button
                    className="
                        relative
                        w-full h-full outline-none
                    "
                    onClick={() => {
                        if (cardNumber < (projectList.length - 1)) {
                            setCardNumber(cardNumber + 1);
                        } else {
                            setCardNumber(0);
                        };
                    }}
                >
                    <div className="
                        absolute top-0
                        w-full h-full
                        opacity-40
                        hover:bg-gradient-to-l hover:from-blue-500
                        dark:hover:bg-gradient-to-l dark:hover:from-blue-400
                    ">
                    </div>
                    {`>`}
                </button>
            </div>
        </div>
    );
};