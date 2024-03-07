export const AboutIntroduction = () => {
    return (
        <li className="
            flex justify-center
            min-w-full
            border-2
            snap-center
        ">
            <div className="
                flex flex-col items-start gap-4
                w-full max-w-6xl
            ">
                <div className="
                    flex flex-col justify-between gap-16
                    max-w-xl
                ">
                    <div className="flex flex-col gap-4">
                        <div className="
                            flex items-center gap-4
                        ">
                            <img className="max-w-16 rounded-full" src="./imgs/willcley.jpg" />
                            <h3 className="text-xl font-bold">
                                Olá, me chamo Willcley
                            </h3>
                        </div>
                    </div>
                </div>
                <h1 className="
                    z-10
                    text-4xl font-bold
                ">
                    {"Desenvolvedor web "}
                    <span className="text-orange-400">Full Stack</span>
                </h1>
            </div>
        </li>
    );
};