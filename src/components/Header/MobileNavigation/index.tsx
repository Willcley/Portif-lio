import { useState } from "react";
import {
    MdOutlineMenu,
    MdClose,
} from "react-icons/md";
import {useOutclick} from "@/hooks/useOutclick";
import { DarkMode } from "../DarkMode";

export const MobileNavigation = ({
    bunner,
    about,
    projects,
    contact,
}: any) => {
    const [ openNav, setOpenNav ] = useState(false);

    const navRef = useOutclick(() => {
        setOpenNav(false);
    });

    const screenScroll = (heightCount: any) => {
        window?.scrollTo({
            top: heightCount | 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="
            sm:hidden
        ">
            <button
                className="
                    duration-200
                    flex flex-col
                    font-bold
                    text-grey-800 dark:text-grey-200
                    hover:text-grey-700
                    dark:hover:text-grey-300
                "
                onClick={() => setOpenNav(!openNav)}
            >
                {!openNav ? (
                    <MdOutlineMenu size={32} />
                ) : (
                    <MdClose size={32} />
                )}
            </button>
            <div
                className={`
                    ${!openNav ? "hidden" : null}
                    absolute top-16 left-0
                    flex justify-end
                    w-full h-screen
                `}
            >
                <div
                    ref={navRef}
                    className="
                        h-1/3
                        bg-grey-900 text-grey-100
                        dark:bg-grey-blue-100 dark:text-grey-900
                        rounded-l-md
                    "
                >
                    <div className="
                        duration-200
                        flex flex-col
                        h-full
                    ">
                        <button
                            className="
                                flex justify-center items-center
                                w-[40vw] h-full
                                hover:bg-opacity-10 dark:hover:bg-opacity-10
                                hover:bg-grey-100 dark:hover:bg-grey-900
                            "
                            onClick={() => {
                                setOpenNav(false)
                                screenScroll(
                                    bunner.current?.clientHeight
                                )
                            }}
                        >
                            Sobre
                        </button>
                        <button
                            className="
                                flex justify-center items-center
                                w-[40vw] h-full
                                hover:bg-opacity-10 dark:hover:bg-opacity-10
                                hover:bg-grey-100 dark:hover:bg-grey-900
                            "
                            onClick={() => {
                                setOpenNav(false)
                                screenScroll(
                                    bunner.current?.clientHeight
                                    + about.current?.clientHeight
                                    + 2
                                )
                            }}
                        >
                            Projetos
                        </button>
                        <button
                            className="
                                flex justify-center items-center
                                w-[40vw] h-full
                                hover:bg-opacity-10 dark:hover:bg-opacity-10
                                hover:bg-grey-100 dark:hover:bg-grey-900
                            "
                            onClick={() => {
                                setOpenNav(false)
                                screenScroll(
                                    bunner.current?.clientHeight
                                    + about.current?.clientHeight
                                    + 2
                                    + projects.current?.clientHeight
                                )
                            }}
                        >
                            Contato
                        </button>
                        {/* <button
                            className="
                                flex justify-center items-center
                                w-[40vw] h-full
                                hover:bg-opacity-10
                                hover:bg-grey-900
                            "
                            onClick={() => {
                                setOpenNav(false)
                                screenScroll(
                                    bunner.current?.clientHeight
                                    + about.current?.clientHeight
                                    + 2
                                    + projects.current?.clientHeight
                                    + contact.current?.clientHeight
                                )
                            }}
                        >
                            Certificados
                        </button> */}
                        <div className="
                            flex justify-between
                            px-1 py-2
                            border-t border-opacity-20
                            border-grey-900
                        ">
                            <DarkMode />
                            <div className="
                                hidden gap-2
                            ">
                                <button>pt</button>
                                <button>en</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};