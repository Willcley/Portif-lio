import Link from "next/link";

export const ContactCard = ({
    icon,
    iconStyle,
    title,
    description,
    link,
    linkText,
}: any) => {
    return (
        <li className="flex items-start gap-6">
            <div className={iconStyle + `
                mt-2 p-4 rounded-lg
                text-grey-blue-100 dark:text-grey-900
            `}>
                {icon}
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-grey-700 dark:text-grey-300">
                    {description}
                </p>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline"
                >
                    {linkText}
                </Link>
            </div>
        </li>
    );
};