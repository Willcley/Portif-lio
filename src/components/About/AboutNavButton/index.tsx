export const AboutNavButton = ({
    text,
    value,
    position,
    scrollRef,
    screenAbout,
    setScreenAbout,
}: any) => {
    const changeAbout = () => {
        const elementSpacing = scrollRef.current?.querySelector("li").clientWidth;
        setScreenAbout(value);
        scrollRef.current?.scroll({
            left: position * (32 + elementSpacing),
            behavior: "smooth",
        });
    };

    return (
        <li>
            <button
                className={`
                    px-2 py-1
                    ${screenAbout === value ? (
                        "text-purple-700 dark:text-orange-400"
                    ) : null}
                    ${screenAbout === value ? (
                        "hover:text-purple-600 dark:hover:text-orange-500"
                    ) : "hover:text-purple-500 dark:hover:text-orange-600"}
                    outline-none
                `}
                onClick={changeAbout}
            >
                {text}
            </button>
        </li>
    );
};