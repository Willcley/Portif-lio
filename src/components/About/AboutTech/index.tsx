import { TechCard } from "./TechCard";
import { techList } from "../../../databases/techList";

export const AboutTech = () => {
    return (
        <li className="
            flex justify-center
            min-w-full
            border-2 border-yellow-400
            snap-center
        ">
            <div className="
                w-full max-w-6xl
            ">
                <div className="
                    flex flex-col items-center gap-4
                    px-4 py-2 max-w-xl
                    border-2 rounded-xl border-blue-400
                ">
                    <div className="
                        flex flex-col items-center gap-2
                    ">
                        <h3 className="text-xl font-bold">Tecnologias:</h3>
                        <ul className="
                            flex justify-center gap-2 flex-wrap pb-2 px-2
                        ">
                            {techList.length > 0 ? techList.map((tech) => (
                                <TechCard tech={tech} key={tech.title} />
                            )) : <p>Lista de tecnologias não encontrada!</p>}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};