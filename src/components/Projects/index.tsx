import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section id="projects" className="
            flex justify-center
            px-8 py-12
            bg-grey-900
            border-t-2 border-blue-400
        ">
            <div className="
                flex flex-col gap-12
                w-full max-w-6xl
            ">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">Meus projetos:</h2>
                </div>
                <ul className="
                    flex justify-around gap-x-16 gap-y-12 flex-wrap
                ">
                    <ProjectCard
                        img="./imgs/projects/burguerKenzie.png"
                        isNew={false}
                        title="Burguer Kenzie"
                        kenzie={true}
                        techList={[
                            "React.js",
                            "Sass",
                            "Html",
                        ]}
                        description="Projeto em que estudei sobre requisições HTTP no React, e useEffect. Onde simula um site simples de lanchonete."
                        linkGithub=""
                        publicGithub={false}
                        linkApplication="https://react-entrega-s3-template-hamburgueria-willcley.vercel.app"
                        online={true}
                    />
                    <ProjectCard
                        img="./imgs/projects/controlFinance.png"
                        isNew={false}
                        title="Control Finance"
                        kenzie={true}
                        techList={[
                            "Html",
                            "Css",
                            "Javascript",
                        ]}
                        description="Projeto feito para praticar o uso de métodos e código limpo, em que aprendi alguns assuntos mais teóricos e de organização. Ele simula um site que calcula transações bancárias."
                        linkGithub=""
                        publicGithub={false}
                        linkApplication="https://kenzie-academy-brasil-developers.github.io/control-finance_willcley/"
                        online={true}
                    />
                    <ProjectCard
                        img="./imgs/projects/openMusic.png"
                        isNew={false}
                        title="Open Music"
                        kenzie={true}
                        techList={[
                            "Html",
                            "Css",
                            "Javascript",
                        ]}
                        description="Projeto que simula um site pra comprar musicas. Em que desenvolvi melhor meu conhecimento sobre filtragem de itens e estilizações."
                        linkGithub=""
                        publicGithub={false}
                        linkApplication="https://kenzie-academy-brasil-developers.github.io/open-music-base_willcley/"
                        online={true}
                    />
                    <ProjectCard
                        img="./imgs/projects/calculadora.png"
                        isNew={false}
                        title="Calculadora"
                        kenzie={false}
                        techList={[
                            "Html",
                            "Css",
                            "Javascript",
                        ]}
                        description="Projeto de uma calculadora onde estava começando a aprender sobre programação. Desenvolvi ele com a intenção de praticar mais minha lógica e aprender a usar lógica com estilização."
                        linkGithub="https://github.com/Willcley/calculadora"
                        publicGithub={true}
                        linkApplication="https://willcley.github.io/calculadora/"
                        online={true}
                    />
                </ul>
            </div>
        </section>
    );
};