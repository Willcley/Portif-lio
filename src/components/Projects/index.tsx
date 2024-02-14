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
                    <p className="text-sm text-grey-300">
                        {"Projetos criados em "}
                        <Link className="
                            no-undeline text-blue-400
                            hover:underline
                        " target="_blank" href="https://kenzie.com.br/">
                            Kenzie Academy Brasil
                        </Link>
                    </p>
                </div>
                <ul className="
                    grid grid-cols-2 gap-x-16 gap-y-12
                ">
                    <ProjectCard
                        img="./imgs/projects/burguerKenzie.png"
                        isNew={false}
                        title="Burguer Kenzie"
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
                        techList={[
                            "Html",
                            "Css",
                            "Javascript",
                        ]}
                        description="Projeto feito para praticar o uso de métodos e código limpo. Nele aprendi alguns assuntos mais teóricos e de organização, como sobre: clareza no código, template literals, métodos, spread operator, arrow function, let/const e desestruturação de arrays e objetos."
                        linkGithub=""
                        publicGithub={false}
                        linkApplication="https://kenzie-academy-brasil-developers.github.io/control-finance_willcley/"
                        online={true}
                    />
                    <ProjectCard
                        img="./imgs/projects/openMusic.png"
                        isNew={false}
                        title="Open Music"
                        techList={[
                            "Html",
                            "Css",
                            "Javascript",
                        ]}
                        description="Nesse projeto, desenvolvi melhor meu conhecimento sobre filtragem de itens. Tive um pouco de dificuldade para usar duas filtragens diferentes no mesmo conteúdo, mas consegui compreender. E também pratiquei um pouco mais estilizações, como a alternância para o modo escuro e a barra de seleção de preço."
                        linkGithub=""
                        publicGithub={false}
                        linkApplication="https://kenzie-academy-brasil-developers.github.io/open-music-base_willcley/"
                        online={true}
                    />
                    <ProjectCard
                        img="./imgs/projects/openMusic.png"
                        isNew={false}
                        title="Open Music"
                        techList={[
                            "Html",
                            "Css",
                            "Javascript",
                        ]}
                        description="Nesse projeto, desenvolvi melhor meu conhecimento sobre filtragem de itens. Tive um pouco de dificuldade para usar duas filtragens diferentes no mesmo conteúdo, mas consegui compreender. E também pratiquei um pouco mais estilizações, como a alternância para o modo escuro e a barra de seleção de preço."
                        linkGithub=""
                        publicGithub={false}
                        linkApplication="https://kenzie-academy-brasil-developers.github.io/open-music-base_willcley/"
                        online={true}
                    />
                </ul>
            </div>
        </section>
    );
};