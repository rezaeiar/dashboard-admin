import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showSuccessModal } from "../store/slices/successModalSlice"
import Button from "./Button"

type SuccessModalProps = {
    isShowSuccessModal: boolean,
    payload: {
        title: string,
        description: string
    }
}

const SuccessModal = ({ isShowSuccessModal, payload }: SuccessModalProps) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) {
            dispatch(showSuccessModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") } }))
        }
    }
    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowSuccessModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)}>
            <div className="flex items-center flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex self-end items-center absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80" onClick={() => dispatch(showSuccessModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") } }))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="h-12 w-12 bg-primary-40 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
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
                <Button size="small" type="primary" onSubmit={() => dispatch(showSuccessModal({ visibility: false, payload: { title: t("Working on Title"), description: t("Working on Description") } }))}>
                    <>
                        {t("Continue")}
                    </>
                </Button>
            </div>
        </div>
    )
}

export default SuccessModal