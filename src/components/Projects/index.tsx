import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section id="projects" className="
            flex justify-center
            p-8
            bg-grey-900
            border-t-2 border-blue-400
        ">
            <div className="
                w-full max-w-6xl
            ">
                <div>
                    <h2>Meus projetos:</h2>
                    <p>Projetos criados em <span>Kenzie Academy Brasil</span></p>
                </div>
                <ul className="
                    grid grid-cols-2 gap-6
                ">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </ul>
            </div>
        </section>
    );
};