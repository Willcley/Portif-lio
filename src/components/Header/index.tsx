import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Header = () => {
    return (
        <header className="
            sticky top-0
            z-40
            flex justify-center
            px-8 py-4
            min-w-full w-full 
            bg-grey-900
            border-b-2 border-blue-400
        ">
            <div className="
                flex justify-between items-center
                w-full max-w-6xl
            ">
                <h2 className="
                    text-2xl font-bold
                ">
                    Willcley Melo
                </h2>
                <MobileNavigation />
                <DesktopNavigation />
            </div>
        </header>
    );
};