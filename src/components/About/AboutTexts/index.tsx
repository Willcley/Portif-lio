import {
    FaSteam,
    FaSpotify,
    FaYoutube,
    FaFileWord,
} from "react-icons/fa";
import { SiGimp } from "react-icons/si";

export const AboutTexts = () => {
    return (
        <li className="
            flex justify-center
            min-w-full
            snap-center
        ">
            <div className="
                flex flex-col items-start gap-4
                w-full max-w-6xl
                overflow-y-hidden
            ">
                <div className="
                    flex flex-col gap-2
                    w-full
                ">
                    <h2 className="
                        text-xl text-purple-700
                        dark:text-orange-400
                    ">Sobre mim</h2>
                    <div className="
                        flex flex-col gap-6 pl-4
                        text-lg text-grey-800
                        dark:text-grey-200
                        border-l-2 border-blue-400
                        dark:border-blue-500
                    ">
                        <p>
                            O que me fez me aproximar da programação foi o meu interesse em criar meus próprios jogos. Acabei focando meu aprendizado na área web, por ter sido o mais acessível pra mim na época em que comecei, e agora gosto muito dessa área também.
                        </p>
                    </div>
                </div>
                <div className="
                    flex flex-col gap-4
                    sm:justify-around
                    w-full h-full
                    pb-24
                    sm:pb-0
                ">
                    <div className="
                        flex flex-col gap-2
                        w-full
                    ">
                        <h2 className="
                            text-xl text-purple-700
                            dark:text-orange-400
                        ">Interesses</h2>
                        <ul className="
                            flex gap-4
                            text-grey-800 dark:text-grey-200
                        ">
                            <li className="
                                flex flex-col gap-1
                                pl-4
                                border-l-2 border-blue-400
                                dark:border-blue-500
                            ">
                                <h3 className="text-blue-500 dark:text-blue-400">
                                    Principais:
                                </h3>
                                <p className="flex items-center gap-2">
                                    <FaSteam
                                        title="Steam"
                                        size={20}
                                        className="text-blue-800"
                                    />
                                    jogos
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaSpotify
                                        title="Spotify"
                                        size={20}
                                        className="text-green-500"
                                    />
                                    músicas
                                </p>
                                <p className="flex items-center gap-2">
                                    <SiGimp
                                        title="Gimp"
                                        size={20}
                                        className="text-grey-900 dark:text-grey-100"
                                    />
                                    desenhar
                                </p>
                            </li>
                            <li className="
                            flex flex-col gap-1
                                pl-4
                                border-l-2 border-blue-400
                                dark:border-blue-500
                            ">
                                <h3 className="text-blue-500 dark:text-blue-400">
                                    Secundários:
                                </h3>
                                <p className="flex items-center gap-2">
                                    <FaYoutube
                                        title="YouTube"
                                        size={20}
                                        className="text-red-600"
                                    />
                                    youtube
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaFileWord
                                        title="Word"
                                        size={20}
                                        className="text-blue-500"
                                    />
                                    escrever
                                </p>
                                <p>
                                    🍳 cozinhar
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="
                        flex flex-col gap-2
                        sm:text-end
                        w-full
                    ">
                        <h2 className="
                            text-xl text-purple-500
                            dark:text-orange-600
                        ">Localização</h2>
                        <div className="
                            flex gap-1
                            sm:self-end
                            text-grey-700
                            dark:text-grey-300
                        ">
                            <p>Brasil |</p>
                            <p className="hidden sm:block">Rio de Janeiro -</p>
                            <p>RJ | Duque de Caxias</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};