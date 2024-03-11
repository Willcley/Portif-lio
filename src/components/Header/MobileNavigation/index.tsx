import { useState } from "react";
import {
    MdOutlineMenu,
    MdClose,
} from "react-icons/md";
import {useOutclick} from "@/hooks/useOutclick";

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
                    text-grey-200 font-bold
                    leading-[0]
                    hover:text-grey-300
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
                    ${openNav ? "z-50" : "z-0"}
                    absolute top-16 left-0
                    duration-200
                    flex justify-end
                    w-full h-screen
                `}
            >
                <div
                    ref={navRef}
                    className="
                        h-1/3
                        bg-grey-100 text-grey-900
                        rounded-l-md
                    "
                >
                    <nav className="
                        duration-200
                        flex flex-col
                        h-full
                        border border-black
                    ">
                        <button
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
                                )
                            }}
                        >
                            Sobre
                        </button>
                        <button
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
                                )
                            }}
                        >
                            Projetos
                        </button>
                        <button
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
                    </nav>
                    <div className="
                        hidden justify-between
                        py-2
                        border-t border-grey-900
                    ">
                        <button>
                            dark
                        </button>
                        <div className="
                            flex gap-2
                        ">
                            <button>pt</button>
                            <button>en</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};