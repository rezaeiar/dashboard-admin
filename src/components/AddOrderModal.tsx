import { useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { showAddOrderModal } from "../store/slices/AddOrderModalSlice"
import { useState } from "react"
import Button from "./Button"
import { usePostOrder } from "../hooks/api/useOrders"

type AddOrderModalProps = {
    isShowOrderModal: boolean
}

const AddOrderModal = ({ isShowOrderModal }: AddOrderModalProps) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const hideModalHandler = (event: any) => {
        if (event.target.className.includes("parent")) dispatch(showAddOrderModal({ visibility: false }))
    }

    const [productId, setProductId] = useState("")
    const [email, setEmail] = useState("")
    const [product_count, setProduct_count] = useState(1)
    const { mutate: addOrder } = usePostOrder()

    const addOrderHandler = () => {
        const newOrderInfo = { productId, email, product_count }
        addOrder(newOrderInfo)
        setProductId("")
        setEmail("")
        setProduct_count(1)
    }

    return (
        <div className={`parent backdrop-blur-sm flex items-center justify-center fixed transition-all h-screen w-full top-0 left-0 bg-general-100/50 z-50 px-4 sm:px-6 md:px-8 ${isShowOrderModal ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={(event) => hideModalHandler(event)} onKeyDown={e => e.keyCode === 13 && addOrderHandler()}>
            <div className="flex flex-col gap-y-4 bg-white w-[500px] rounded p-6">
                <div className="flex justify-between items-center">
                    <h3 className='ltr:font-nunitosans-bold rtl:font-iransans-bold text-lg text-general-100'>
                        {t("Add Order")}
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80 cursor-pointer" onClick={() => dispatch(showAddOrderModal({ visibility: false }))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("Product ID (Six digit code)")}
                    </label>
                    <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("000111")} value={productId} onChange={e => setProductId(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("Customer Email")}
                    </label>
                    <input type="text" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("customer_email@gmail.com")} value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular">
                        {t("Order Count")}
                    </label>
                    <input type="number" className="border border-general-50 outline-none rounded text-xs sm:text-sm text-general-70 py-2 px-4 md:px-2.5 lg:px-4 font-iransans-regular placeholder:ltr:font-nunitosans-regular" placeholder={t("")} value={product_count} onChange={e => setProduct_count(+e.target.value)} />
                </div>
                <div className="flex gap-x-6 items-center justify-end">
                    <a href="#" className="text-primary-100 ltr:font-nunitosans-regular rtl:font-iransans-regular" onClick={() => dispatch(showAddOrderModal({ visibility: false }))}>
                        {t("Cancel")}
                    </a>
                    <Button size="small" type="primary" onSubmit={addOrderHandler}>
                        <>
                            {t("Create Order")}
                        </>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddOrderModal