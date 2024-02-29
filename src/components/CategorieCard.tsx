import { useTranslation } from "react-i18next"
import Button from "./Button"
type CategorieCardProps = {
    id: string,
    name: string
}
const CategorieCard = ({ id, name }: CategorieCardProps) => {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-card group">
            <div className="relative">
                {/* <img src="./images/Bitmap.png" className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover" alt="" /> */}
                <div className="w-full h-36 sm:h-48 md:h-56 lg:h-64 bg-general-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-16 sm:h-20 md:h-24 lg:w-28 w-16 sm:w-20 md:w-24 lg:h-28 text-general-70">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </div>
                <div className="h-full w-full absolute bg-general-90 bg-opacity-0 top-0 left-0 group-hover:bg-opacity-70 transition-colors items-center justify-center flex">
                    <Button type="white" size="small" styles="hidden opacity-0 group-hover:flex group-hover:opacity-100 transition-colors" link={`/categories/${id}`}>
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                            {t("edit")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="py-3 xl:py-5 px-5 xl:px-7">
                <h3 className="text-general-100 text-xs sm:text-sm lg:text-base font-nunitosans-extrabold">
                    {name}
                </h3>
                <span className="text-general-80 text-[10px] sm:text-xs lg:text-sm font-nunitosans-regular rtl:font-iransans-regular">
                    24 {t("item")}
                </span>
            </div>
        </div>
    )
}

export default CategorieCard