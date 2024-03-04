import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showErrorModal } from "../store/slices/ErrorModalSlice"
import Button from "./Button"

type ErrorModalProps = {
    isShowErrorModal: boolean,
    payload: {
        title: string,
        description: string
    }
}

const ErrorModal = ({ isShowErrorModal, payload }: ErrorModalProps) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) {
            dispatch(showErrorModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") } }))
        }
    }
    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowErrorModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)}>
            <div className="flex items-center flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex self-end items-center absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => dispatch(showErrorModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") } }))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="h-12 w-12 bg-red-40 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-101">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100' >
                        {payload && payload.title}
                    </h3>
                    <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm text-general-80 text-center'>
                        {payload && payload.description}
                    </span>
                </div>
                <Button size="small" type="destructive" onSubmit={() => dispatch(showErrorModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") } }))}>
                    <>
                        {t("Done")}
                    </>
                </Button>
            </div>
        </div>
    )
}

export default ErrorModal