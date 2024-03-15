import { TechCard } from "./TechCard";
import { techList } from "../../../databases/techList";
import { toolList } from "../../../databases/toolList";

export const AboutTech = () => {
    return (
        <li className="
            flex justify-center
            min-w-full
            snap-center
        ">
            <div className="
                flex flex-col gap-8
                w-full max-w-6xl
            ">
                <div className="
                    flex flex-col gap-4
                ">
                    <h2 className="
                        text-xl text-purple-700
                        dark:text-orange-400
                    ">
                        Tecnologias
                    </h2>
                    <div className="
                        flex flex-col gap-2
                    ">
                        <ul className="
                            flex gap-2 flex-wrap pb-2 px-2
                        ">
                            {techList.length > 0 ? techList.map((tech) => (
                                <TechCard key={tech.title} tech={tech} />
                            )) : <p>Lista de tecnologias não encontrada!</p>}
                        </ul>
                    </div>
                </div>
                <div className="
                    flex flex-col gap-4
                ">
                    <h2 className="
                        text-xl text-purple-700
                        dark:text-orange-400
                    ">
                        Ferramentas
                    </h2>
                    <div className="
                        flex flex-col gap-2
                    ">
                        <ul className="
                            flex gap-2 flex-wrap pb-2 px-2
                        ">
                            {toolList.length > 0 ? toolList.map((tool) => (
                                <TechCard tech={tool} key={tool.title} />
                            )) : <p>vazio...</p>}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};