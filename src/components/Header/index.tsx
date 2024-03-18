import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Header = ({
    bunner,
    about,
    projects,
    contact,
}: any) => {
    return (
        <header className="
            sticky top-0 z-40
            flex justify-center
            px-8 py-4 min-w-full w-full 
            bg-grey-blue-100 dark:bg-grey-900
            text-grey-900 dark:text-grey-100
            border-b-2 border-blue-500
            dark:border-blue-400
        ">
            <div className="
                flex justify-between items-center
                w-full max-w-6xl
            ">
                <h2 className="text-2xl font-bold">
                    Willcley Melo
                </h2>
                <MobileNavigation
                    bunner={bunner}
                    about={about}
                    projects={projects}
                    contact={contact}
                />
                <DesktopNavigation
                    bunner={bunner}
                    about={about}
                    projects={projects}
                    contact={contact}
                />
            </div>
        </header>
    );
};