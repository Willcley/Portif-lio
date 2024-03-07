import Image from "next/image";

export const Bunner = () => {
    return (
        <section className="
            relative
            flex justify-center items-center
            p-8 w-full
            bg-blue-900
        ">
            <div className="
                z-10
                flex justify-between items-start gap-4
                sm:items-center
                py-12
                w-full max-w-6xl h-full
            ">
                <div className="
                    flex flex-col gap-4
                ">
                    <div className="z-10">
                        <h3 className="
                            text-2xl font-bold
                            text-blue-300
                        ">
                            Olá, seja bem-vindo!
                        </h3>
                    </div>
                    <h1 className="
                        z-10
                        text-4xl font-bold
                    ">
                        {"Desenvolvedor web "}
                        <span className="text-orange-400">Full Stack</span>
                    </h1>
                </div>
            </div>
            <div className="
                z-0
                absolute top-0
                w-full h-full
            ">
                <Image
                    src="/imgs/abstractWaveBlue.jpg"
                    alt="code"
                    layout="fill"
                    objectFit="cover"
                    sizes="full"
                />
            </div>
        </section>
    );
};