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
                    outline-none
                    bg-grey-900 dark:bg-grey-blue-100
                    border-grey-blue-100 dark:border-grey-900
                    border-2
                    sm:bg-grey-blue-100 dark:sm:bg-grey-900
                    sm:border-grey-900 sm:dark:border-grey-blue-100
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
                        dark:ml-6
                        rounded-full
                        bg-blue-500
                        dark:bg-blue-400
                        text-grey-blue-100 dark:text-grey-900
                    `}>
                        <IoSunny
                            size={16}
                            className="dark:hidden"
                        />
                        <IoMoon
                            size={16}
                            className="hidden dark:block"
                        />
                    </div>
                </div>
            </button>
        </div>
    );
};