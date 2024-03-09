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
                        text-xl text-orange-400
                    ">Sobre mim</h2>
                    <div className="
                        flex flex-col gap-6 pl-4
                        text-lg text-grey-200
                        border-l-2 border-blue-500
                    ">
                        <p>
                            O que me fez me aproximar da programação foi o meu interesse em criar meus próprios jogos. Acabei focando meu aprendizado na área web, por ter sido o mais acessível pra mim na época em que comecei, e agora gosto muito dessa área também.
                        </p>
                    </div>
                </div>
                <div className="
                    flex flex-col justify-between gap-4
                    sm:flex-row
                    w-full h-full
                    pb-24
                    sm:pb-0
                ">
                    <div className="
                        flex flex-col gap-2
                        w-full
                    ">
                        <h2 className="
                            text-xl text-orange-400
                        ">Interesses</h2>
                        <ul className="
                            flex sm:flex-col gap-4
                            md:flex-row
                            w-full
                        ">
                            <li className="
                                pl-4 w-full
                                border-l-2 border-blue-500
                            ">
                                <h3 className="text-blue-400">Principais:</h3>
                                <p>🎮 jogos</p>
                                <p>🎵 músicas</p>
                                <p>🎨 desenhar</p>
                            </li>
                            <li className="
                                pl-4 w-full
                                border-l-2 border-blue-500
                            ">
                                <h3 className="text-blue-400">Secundários:</h3>
                                <p>▶️ videos | animes</p>
                                <p>📖 escrever | ler</p>
                                <p>🍳 cozinhar</p>
                            </li>
                        </ul>
                    </div>
                    <div className="
                        flex flex-col gap-2
                        self-end text-end
                        w-full
                    ">
                        <h2 className="
                            text-xl text-orange-400
                        ">Localização</h2>
                        <ul className="
                            flex flex-col items-end gap-2
                            px-2
                            border-r-2 border-blue-500
                        ">
                            <li className="flex gap-2">
                                <p className="text-blue-500">
                                    {">"}
                                </p>
                                <p className="flex gap-2">
                                    <span className="text-blue-400">
                                        país:
                                    </span>
                                    Brasil
                                </p>
                            </li>
                            <li className="flex gap-2">
                                <p className="text-blue-500">
                                    {">"}
                                </p>
                                <p className="flex gap-2">
                                    <span className="text-blue-400">
                                        estado:
                                    </span>
                                    Rio de Janeiro - RJ
                                </p>
                            </li>
                            <li className="flex gap-2">
                                <p className="text-blue-500">
                                    {">"}
                                </p>
                                <p className="flex gap-2">
                                    <span className="text-blue-400">
                                        cidade:
                                    </span>
                                    Duque de Caxias
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};