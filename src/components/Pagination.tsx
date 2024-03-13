import { useTranslation } from "react-i18next"

type Pagination = {
    page: number,
    numberOfItems: number,
    shown: number,
    updatedTime: Date,
    changePage: (page: number) => void,
}

const Pagination = ({ page, numberOfItems, shown, updatedTime, changePage }: Pagination) => {

    const { t } = useTranslation()

    const startAt = ((page - 1) * shown) + 1
    const endIn = (numberOfItems / page > shown) ? ((page - 1) * shown) + shown : numberOfItems

    const changePageHandler = (state: "PREV" | "NEXT") => {
        switch (state) {
            case "PREV": {
                if (page > 1) changePage(page - 1)
                break
            }
            case "NEXT": {
                if ((Math.ceil(numberOfItems / shown)) > page) changePage(page + 1)
            }
        }
    }
    return (
        <div className="text-sm flex justify-between">
            <span className="text-general-80">
                {t("Showing")} {startAt}-{endIn} {t("of")} {numberOfItems}
            </span>
            <div className="flex items-center gap-x-2">
                <span className="text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular text-xs">
                    {t("Updated in")} {updatedTime.getHours()}:{updatedTime.getMinutes()}
                </span>
                <div className="flex border border-general-50 divide-x rounded-md">
                    <div className={`px-2 py-1 ${(page > 1) ? 'cursor-pointer text-general-100' : "text-general-80"}`} onClick={() => changePageHandler("PREV")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className={`px-2 py-1 ${((Math.ceil(numberOfItems / shown)) > page) ? 'cursor-pointer text-general-100' : "text-general-80"}`} onClick={() => changePageHandler("NEXT")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination