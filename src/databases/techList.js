import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { SiZod, SiExpress } from "react-icons/si";

export const techList = [
    {
        icon: <FaReact size={40} />,
        title: "React",
        link: "https://react.dev",
    },
    {
        icon: <FaHtml5 size={40} />,
        title: "Html",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
        icon: <IoLogoCss3 size={40} />,
        title: "Css",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    {
        icon: <FaSass size={40} />,
        title: "Sass",
        link: "https://sass-lang.com",
    },
    {
        icon: <BiLogoJavascript size={40} />,
        title: "Javascript",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
        icon: <BiLogoTypescript size={40} />,
        title: "Typescript",
        link: "https://www.typescriptlang.org",
    },
    {
        icon: <SiZod size={40} />,
        title: "Zod",
        link: "https://zod.dev",
    },
    {
        icon: <SiExpress size={40} />,
        title: "Express",
        link: "https://expressjs.com/pt-br/",
    },
];