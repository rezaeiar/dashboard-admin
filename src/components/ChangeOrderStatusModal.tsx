import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { usePutOrder } from "../hooks/api/useOrders"
import { showChangeOrderStatusModal } from "../store/slices/ChangeOrderStatusSlice"
import { useState } from "react"
import Button from "./Button"

type ChangeOrderStatusModalProps = {
    isShowChangeOrderStatusModal: boolean,
    orderId: string
}

const ChangeOrderStatusModal = ({ isShowChangeOrderStatusModal, orderId }: ChangeOrderStatusModalProps) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { mutate: changeOrderStatus } = usePutOrder()

    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) dispatch(showChangeOrderStatusModal({ visibility: false }))
    }

    const [orderStatus, setOrderStatus] = useState("COMPLETED")

    const changeOrderStatusHandler = () => {
        changeOrderStatus({orderId, orderStatus})
    }

    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowChangeOrderStatusModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)} onKeyDown={e => e.keyCode === 13 && changeOrderStatusHandler()}>
            <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex justify-between items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        {t("Change Status")}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => dispatch(showChangeOrderStatusModal({ visibility: false, orderId: null }))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col gap-1">
                    <div className={`bg-white h-10 border p-0.5 rounded-md cursor-pointer ${orderStatus === "COMPLETED" ? "border-green-101" : ""}`} onClick={() => setOrderStatus("COMPLETED")}>
                        <div className="h-full w-full bg-green-101 flex items-center justify-center text-white rounded ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                            {t("COMPLETED")}
                        </div>
                    </div>
                    <div className={`bg-white h-10 border p-0.5 rounded-md cursor-pointer  ${orderStatus === "PENDING" ? "border-yellow-101" : ""}`} onClick={() => setOrderStatus('PENDING')}>
                        <div className="h-full w-full bg-yellow-101 flex items-center justify-center text-white rounded ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                            {t("PENDING")}
                        </div>
                    </div>
                    <div className={`bg-white h-10 border p-0.5 rounded-md cursor-pointer ${orderStatus === "REJECTED" ? "border-red-101" : ""}`} onClick={() => setOrderStatus("REJECTED")}>
                        <div className="h-full w-full bg-red-101 flex items-center justify-center text-white rounded ltr:font-nunitosans-regular rtl:font-iransans-regular text-sm">
                            {t("REJECTED")}
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-6 items-center justify-end">
                    <a href="#" className="text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular" onClick={() => dispatch(showChangeOrderStatusModal({ visibility: false }))}>
                        {t("Cancel")}
                    </a>
                    <Button size="small" type="primary" onSubmit={changeOrderStatusHandler}>
                        <>
                            {t("Change")}
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChangeOrderStatusModal