import React, { useState } from "react"
import { useTranslation } from "react-i18next"
type FiltersProps = {
    firstitem: String[],
    seconditem: String[],
    searchSubmit: (value: string) => void,
    setFirstItemValue: React.Dispatch<React.SetStateAction<string>>,
    setSecondItemValue: React.Dispatch<React.SetStateAction<string>>
}

const Filters = (props: FiltersProps) => {
    const { t } = useTranslation()
    const [serachValue, setSearchValue] = useState("")

    const serachHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) {
            props.searchSubmit(serachValue)
        }
    }
    return (
        <div className="capitalize flex gap-2 flex-col md:flex-row">
            <div className="grid grid-cols-2 h-10 md:flex gap-x-2">
                <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                    <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60 capitalize" onChange={(event) => props.setFirstItemValue(event.target.value)}>
                        {
                            props.firstitem.map((item, index) => (
                                index === 0 ? (
                                    <option selected value='-1'>
                                        {t(item as string)}
                                    </option>
                                ) :
                                    <option value={item as string}>{item}</option>
                            ))
                        }
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 absolute rtl:left-2 ltr:right-2 text-general-70"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path></svg>
                </div>
                <div className="flex items-center relative md:w-44 shrink-0 font-nunitosans-regular rtl:font-iransans-regular rounded border border-general-50 bg-white">
                    <select className="h-full block w-full p-2 text-xs sm:text-sm text-general-70 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-general-60 capitalize" onChange={(event) => props.setSecondItemValue(event.target.value)}>
                        <option selected value='-1'>
                            {t('filter by status')}
                        </option>
                        <option value="completed">{t("completed")}</option>
                        <option value="pending">{t("pending")}</option>
                        <option value="rejected">{t("rejected")}</option>
                    </select>
                </div>
            </div>
            <div className="flex md:flex-grow lg:grow-0 items-center font-nunitosans-regular relative text-xs sm:text-sm text-general-70 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 absolute left-3 rtl:right-3 cursor-pointer" onClick={() => props.searchSubmit(serachValue)}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                </svg>
                <input type="text" className="h-10 grow lg:grow-0 lg:w-72 bg-transparent rounded border border-general-50 outline-none px-10 placeholder:text-general-70 capitalize font-nunitosans-regular rtl:font-iransans-regular" value={serachValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={(event) => serachHandler(event)} placeholder={t("search")} />
            </div>
        </div>
    )
}

export default Filters