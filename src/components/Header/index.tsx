export const Header = () => {
    return (
        <header className="
            flex justify-center
            min-w-full px-8 py-4
            bg-grey-900
            border-solid border-b-2 border-blue-400
        " >
            <div className="
                flex justify-between items-center
                w-full max-w-6xl
            ">
                <h2 className="text-2xl font-bold">Willcley Melo</h2>
                <nav className="
                    flex justify-between items-center gap-8
                    text-grey-200
                ">
                    <a href="#about" className="hover:text-orange-400">
                        Sobre
                    </a>
                    <a href="#projects" className="hover:text-orange-400">
                        Projetos
                    </a>
                    <a href="#contact" className="hover:text-orange-400">
                        Contato
                    </a>
                </nav>
            </div>
        </header>
    );
};