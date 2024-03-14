import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";

export const DarkMode = () => {
    const { setTheme, theme } = useTheme();

    return (
        <div>
            <button
                className="
                    flex
                    rounded-full
                    bg-gradient-to-t from-grey-200 to-grey-100
                    dark:bg-gradient-to-t dark:from-grey-900 dark:to-grey-850
                    text-orange-400
                    border-2 border-grey-900
                    dark:border-grey-200
                "
                onClick={() => {
                    theme === "dark"
                    ? setTheme("light")
                    : setTheme("dark")
                }}
            >
                <div className="w-12">
                    <div className={`
                        duration-200 p-1 w-6
                        ${theme === "dark" ? "ml-6" : ""}
                        rounded-full
                        bg-blue-400
                        text-grey-100 dark:text-grey-900
                    `}>
                        {theme === "dark"
                        ? <IoMoon size={16} />
                        : <IoSunny size={16} />}
                    </div>
                </div>
            </button>
        </div>
    );
};