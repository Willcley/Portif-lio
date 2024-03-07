import Link from "next/link";

export const TechCard = ({ tech }: any) => {
    return (
        <li title={tech.title} className="
            cursor-pointer
            transition-[2s]
            hover:text-blue-400
        ">
            <Link target="_blank" href={tech.link}>
                {tech.icon}
            </Link>
        </li>
    );
};