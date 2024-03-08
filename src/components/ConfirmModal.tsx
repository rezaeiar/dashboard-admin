import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showConfirmModal } from "../store/slices/ConfirmModalSlice"
import Button from "./Button"

type ConfirmModalProps = {
    isShowConfirmModal: boolean,
    payload: {
        title: string,
        description: string
    },
    button: "Delete" | "Continue",
    handler: () => void,
}

const ConfirmModal = ({ isShowConfirmModal, payload, button, handler }: ConfirmModalProps) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) dispatch(showConfirmModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button, handler }))
    }
    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowConfirmModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)}>
            <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex justify-between items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        {payload.title}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => dispatch(showConfirmModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button, handler }))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <span className='ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm text-general-80'>
                    {payload.description}
                </span>
                <div className="flex gap-x-6 items-center justify-end">
                    {
                        button === "Continue" ?
                            <a className="text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => dispatch(showConfirmModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button, handler }))}>
                                Cancel
                            </a> :
                            <a className="text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => dispatch(showConfirmModal({ vissablity: false, payload: { title: t("Working on Title"), description: t("Working on Description") }, button, handler }))}>
                                Cancel
                            </a>
                    }
                    {
                        button === "Continue" ?
                            <Button size="small" type="primary" styles="" onSubmit={() => handler()} link="">
                                <>
                                    Continue
                                </>
                            </Button> :
                            <Button size="small" type="destructive" styles="" onSubmit={() => handler()}>
                                <>
                                    Delete
                                </>
                            </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal