import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "../Link";
import { SelectedPage } from "@/types/Enum";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import DefaultButton from "@/components/DefaultButon";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isDesktopScreen = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav>
            <div
                className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                {/*Main Container Header*/}
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/*Left Side*/}
                        <img alt="logo" src={Logo}/>

                        {/*Right Side*/}
                        {isDesktopScreen && 
                            <div className={`${flexBetween} w-full`}>
                                {/*Links*/}
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link 
                                page="Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                page="Benefits" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                page="Our Classes"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                page="Contact Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                </div>
                                {/*Become a member*/}
                                <div className={`${flexBetween} gap-8`}>
                                <p>Sign in</p>
                                <DefaultButton setSelectedPage={setSelectedPage}>Become a Member</DefaultButton>
                                </div>
                            </div>
                        }
                        {!isDesktopScreen &&
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        }
                    </div>
                </div>
            </div>
            {!isDesktopScreen && isMenuToggled && (
                <div className="fixed flex flex-col items-center -right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl gap-10 text-2xl">
                    <div className="mt-10">
                        <button onClick={() => setIsMenuToggled(false)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400"/>
                        </button>
                    </div>
                    <Link 
                    page="Home" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Benefits" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Our classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link 
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            )}
        </nav>
    )
}

export default NavBar;