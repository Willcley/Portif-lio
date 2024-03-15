import { DarkMode } from "../DarkMode";

export const DesktopNavigation = ({
    bunner,
    about,
    projects,
    contact,
}: any) => {
    const screenScroll = (heightCount: any) => {
        window?.scrollTo({
            top: heightCount | 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="
            hidden sm:flex gap-8
        ">
            <nav className="
                flex justify-around items-center gap-8
                w-full
                text-grey-800 dark:text-grey-200
                sm:justify-between sm:w-auto
            ">
                <button
                    className="
                        duration-200
                        hover:text-purple-500
                        dark:hover:text-orange-400
                    "
                    onClick={() => screenScroll(
                        bunner.current?.clientHeight
                    )}
                >
                    Sobre
                </button>
                <button
                    className="
                        duration-200
                        hover:text-purple-500
                        dark:hover:text-orange-400
                    "
                    onClick={() => screenScroll(
                        bunner.current?.clientHeight
                        + about.current?.clientHeight
                        + 2
                    )}
                >
                    Projetos
                </button>
                <button
                    className="
                        duration-200
                        hover:text-purple-500
                        dark:hover:text-orange-400
                    "
                    onClick={() => screenScroll(
                        bunner.current?.clientHeight
                        + about.current?.clientHeight
                        + 2
                        + projects.current?.clientHeight
                    )}
                >
                    Contato
                </button>
                {/* <button
                    className="
                        duration-200
                        hover:text-orange-400
                    "
                    onClick={() => screenScroll(
                        bunner.current?.clientHeight
                        + about.current?.clientHeight
                        + 2
                        + projects.current?.clientHeight
                        + contact.current?.clientHeight
                    )}
                >
                    Certificados
                </button> */}
            </nav>
            <div className="
                flex flex-col justify-between
                py-2
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
    );
};