import Link from "next/link";

export const TechCard = ({ tech }: any) => {
    return (
        <li title={tech.title} className="
            cursor-pointer duration-200
            text-grey-200 text-opacity-80
            hover:text-blue-400
        ">
            <Link target="_blank" href={tech.link}>
                {tech.icon}
            </Link>
        </li>
    );
};