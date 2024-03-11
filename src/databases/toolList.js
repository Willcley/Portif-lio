import {
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaSlack,
} from "react-icons/fa";
import {
    SiInsomnia,
    SiNotion,
    SiVercel,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export const toolList = [
    {
        icon: <TbBrandVscode size={40} />,
        title: "VSCode",
        link: "https://code.visualstudio.com/",
    },
    {
        icon: <FaGitAlt size={40} />,
        title: "Git",
        link: "https://git-scm.com/",
    },
    {
        icon: <SiInsomnia size={40} />,
        title: "Insomnia",
        link: "https://insomnia.rest/",
    },
    {
        icon: <i className="devicon-dbeaver-plain text-4xl"></i>,
        title: "DBeaver",
        link: "https://dbeaver.io/",
    },
    {
        icon: <FaSlack size={40} />,
        title: "Slack",
        link: "https://slack.com/",
    },
    {
        icon: <FaGithub size={40} />,
        title: "Github",
        link: "https://github.com/",
    },
    {
        icon: <FaFigma size={40} />,
        title: "Figma",
        link: "https://www.figma.com/",
    },
    {
        icon: <SiNotion size={40} />,
        title: "Notion",
        link: "https://www.notion.so/",
    },
    {
        icon: <SiVercel size={40} />,
        title: "Vercel",
        link: "https://vercel.com/",
    },
    // {
    //     icon: "",
    //     title: "",
    //     link: "",
    // },
]