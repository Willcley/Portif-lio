import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="
            flex justify-center
            min-w-full px-8 py-4
            bg-grey-900
        ">
            <div className="
                flex justify-between items-center
                w-full max-w-6xl
            ">
                <div className="flex gap-2">
                    <img className="max-w-12 rounded-full" src="./imgs/willcley.jpg" />
                    <div>
                        <h3 className="text-blue-400">
                            Obrigado!
                        </h3>
                        <p className="text-grey-200">
                            Siga-me em minhas redes sociais e vamos conversar
                        </p>
                    </div>
                </div>
                <div className="
                    flex justify-between items-center gap-6
                ">
                    <Link className="
                        hover:cursor-pointer
                        hover:text-blue-400
                    " target="_blank" href="https://www.instagram.com/willcleymelo/">
                        <FaInstagram size={40} />
                    </Link>
                    <Link className="
                        hover:cursor-pointer
                        hover:text-blue-400
                    " target="_blank" href="https://www.linkedin.com/in/willcley/">
                        <FaLinkedin size={40} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};