import Link from "next/link";

export const DesktopNavigation = () => {
    return (
        <div className="
            hidden sm:flex gap-8
        ">
            <nav className="
                flex justify-around items-center gap-8
                w-full
                text-grey-200
                sm:justify-between sm:w-auto
            ">
                <Link 
                    href="#about"
                    className="
                        duration-200
                        hover:text-orange-400
                    "
                >
                    Sobre
                </Link>
                <Link 
                    href="#projects"
                    className="
                        duration-200
                        hover:text-orange-400
                    "
                >
                    Projetos
                </Link>
                <Link 
                    href="#contact"
                    className="
                        duration-200
                        hover:text-orange-400
                    "
                >
                    Contato
                </Link>
                {/* <Link 
                    href=""
                    className="
                        duration-200
                        hover:text-orange-400
                    "
                >
                    Certificados
                </Link> */}
            </nav>
            <div className="
                hidden flex-col justify-between
                py-2
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
    );
};