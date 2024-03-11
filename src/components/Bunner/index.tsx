import Image from "next/image";

export const Bunner = ({ bunner }: any) => {
    return (
        <section ref={bunner} className="
            relative
            flex justify-center items-center
            p-8 w-full
            bg-blue-900
        ">
            <div className="
                z-10
                flex justify-between items-start gap-4
                sm:items-center
                py-16
                w-full max-w-6xl h-full
            ">
                <div className="
                    flex flex-col gap-4
                ">
                    <div className="z-10">
                        <h3 className="
                            text-4xl font-bold
                            text-blue-300
                        ">
                            Olá 👋, seja bem-vindo!
                        </h3>
                    </div>
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
                    priority
                    fill
                    sizes="full"
                    className="object-cover"
                />
            </div>
        </section>
    );
};