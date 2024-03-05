import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="
            flex justify-center
            min-w-full px-8 py-8
            bg-grey-900
        ">
            <div className="
                flex flex-col justify-between items-center gap-4
                sm:flex-row
                w-full max-w-6xl
            ">
                <div className="
                    flex flex-col justify-between items-center
                    text-center
                    sm:items-start
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
                <div className="
                    flex justify-between items-center gap-4
                ">
                    <Link 
                        href="https://www.instagram.com/willcleymelo/"
                        target="_blank"
                        title="Instagram"
                        className="
                            hover:cursor-pointer
                            hover:text-blue-400
                        "
                    >
                        <FaInstagram size={40} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/willcley/"
                        target="_blank"
                        title="LinkedIn"
                        className="
                            hover:cursor-pointer
                            hover:text-blue-400
                        "
                    >
                        <FaLinkedin size={40} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};