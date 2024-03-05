import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="
            flex justify-center
            min-w-full px-8 py-4
            bg-grey-900
        ">
            <div className="
                flex flex-col justify-between items-center gap-2
                sm:flex-row
                w-full max-w-6xl min-h-12
            ">
                <h3 className="
                    text-blue-400
                ">
                    Obrigado pela visita!
                </h3>
                <p className="text-grey-300">
                    {"Desenvolvido por "}
                    <Link
                        href="https://github.com/Willcley"
                        target="_blank"
                        className="
                            italic
                            hover:text-blue-500
                            hover:underline
                        "
                    >
                        Willcley Melo
                    </Link>
                </p>
            </div>
        </footer>
    );
};