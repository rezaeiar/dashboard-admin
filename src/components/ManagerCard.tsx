import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Button from "./Button"

type ManagerCardProps = {
    id: string,
    image: null,
    first_name: string,
    last_name: string,
    roles: string[],
    avatar: string
}

const ManagerCard = ({ id, first_name, last_name, avatar, roles }: ManagerCardProps) => {

    const { t } = useTranslation()

    return (
        <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-card group hover:scale-105 hover:shadow-lg hover:z-20 transition-all">
            <div className="relative">
                {
                    avatar &&
                    <img src={avatar} className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover" alt="manager" />
                }
                {
                    !avatar &&
                    <div className="w-full h-36 sm:h-48 md:h-56 lg:h-64 bg-general-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 sm:h-20 md:h-24 lg:w-28 w-16 sm:w-20 md:w-24 lg:h-28 text-general-70">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                }
                <div className="h-full w-full absolute group-hover:bg-general-100 bg-opacity-0 top-0 left-0 group-hover:bg-opacity-70 transition-colors items-center justify-center flex">
                    <Button type="white" size="small" styles="hidden opacity-0 group-hover:flex group-hover:opacity-100 transition-colors" link={`/panel/customers/info/${id}`}>
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            {t("Show Me")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="py-3 xl:py-5 px-5 xl:px-7 flex justify-between items-strat">
                <div className="flex flex-col">
                    <Link to={`/panel/customers/info/${id}`} className="text-general-100 text-xs lg:text-sm font-iransans-bold">
                        {first_name} {last_name}
                    </Link>
                    <span className="text-general-80 text-[10px] lg:text-xs font-nunitosans-regular rtl:font-iransans-regular">
                        {
                            t(roles.filter((role) => role !== "DEFAULT").join(""))
                        }
                    </span>
                </div>
                <div className="flex gap-1">
                    <Button size="small" styles="!px-3" type="secondary" link={`/panel/inbox/${id}`}>
                        <>
                            <span className="text-xs hidden md:block">
                                {t("Message")}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ManagerCard