import Link from "next/link";

export const TechCard = ({ icon, title, link }: any) => {
    return (
        <li title={title} className="
            cursor-pointer
            hover:text-blue-400
        ">
            <Link target="_blank" href={link}>
                {icon}
            </Link>
        </li>
    );
};