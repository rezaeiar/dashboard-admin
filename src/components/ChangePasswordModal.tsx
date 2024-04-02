import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { ShowChangePasswordModal } from "../store/slices/ChangePasswordSlice"
import Button from "./Button"
import { usePassword } from "../hooks/api/usePassword"


type AddTaskModalProps = {
    isShowChangePasswordModal: boolean
}
const ChangePasswordModal = ({ isShowChangePasswordModal }: AddTaskModalProps) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const [currentPassword, setCurrentPassword] = useState("")
    const [password, setPassword] = useState("")
    
    const { mutate: changePassword } = usePassword()
    
    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) dispatch(ShowChangePasswordModal({ visibility: false }))
    }
    const changePasswordHandler = () => {
        changePassword({ password, currentPassword })
    }

    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowChangePasswordModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)} onKeyDown={e => e.keyCode === 13 && changePasswordHandler()}>
            <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex justify-between items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        {t("Change Password")}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => dispatch(ShowChangePasswordModal({ visibility: false }))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("Current Password")}
                    </label>
                    <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("New Password")}
                    </label>
                    <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="flex gap-x-6 items-center justify-end">
                    <a href="#" className="text-red-101 ltr:font-nunitosans-regular rtl:font-iransans-regular" onClick={() => dispatch(ShowChangePasswordModal({ visibility: false }))}>
                        {t("Cancel")}
                    </a>
                    <Button size="small" type="destructive" onSubmit={changePasswordHandler}>
                        <>
                            {t("Change Password")}
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordModal