import { ContactCard } from "./ContactCard";

import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Contact = () => {
    return (
        <section id="contact" className="
            flex justify-center
            min-w-full p-8
        ">
            <div className="
                grid grid-cols-2 gap-4
                w-full max-w-6xl
            ">
                <div className="flex flex-col gap-4 py-8">
                    <h2 className="text-2xl font-bold">
                        {"Vamos conversar e "}
                        <span className="text-orange-400">
                            desenvolver nossa criatividade
                        </span>
                        {" juntos"}
                    </h2>
                    <p className="text-lg">
                        Alguma descrição geral sobre os meios de contato
                    </p>
                </div>
                <ul className="flex flex-col gap-6">
                    <ContactCard
                        icon={<FaWhatsapp size={32} />}
                        iconStyle="bg-green-400"
                        title="Meu Celular"
                        description="Me envie uma mensagem pelo whatsapp, se deseja uma conversa mais casual"
                        link=""
                        linkText="Enviar Mensagem"
                    />
                    <ContactCard
                        icon={<IoMdMail size={32} />}
                        iconStyle="bg-red-500"
                        title="Meu E-mail"
                        description="Me envie um e-mail, se deseja uma abordagem mais formal"
                        link=""
                        linkText="Enviar E-mail"
                    />
                    <ContactCard
                        icon={<FaLinkedinIn size={32} />}
                        iconStyle="bg-blue-500"
                        title="Meu LinkedIn"
                        description="Entre em contato comigo pelo LinkedIn, se deseja uma nova conexão em sua rede"
                        link="https://www.linkedin.com/in/willcley/"
                        linkText="Visitar LinkedIn"
                    />
                </ul>
            </div>
        </section>
    );
};