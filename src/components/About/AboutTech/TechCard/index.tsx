import Link from "next/link";

export const TechCard = ({ tech }: any) => {
    return (
        <li title={tech.title} className="
            cursor-pointer duration-200
            text-grey-200 text-opacity-80
            hover:text-blue-400
        ">
            <Link
                href={tech.link}
                target="_blank"
                className="
                    flex flex-col justify-between items-center
                    h-full
                "
            >
                {tech.icon}
                <p className="text-xs">
                    {tech.title}
                </p>
            </Link>
        </li>
    );
};