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
                <img src="./images/Bitmap.png" className="w-full object-cover" alt="" />
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