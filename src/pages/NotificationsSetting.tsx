import { useDispatch } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery } from "react-query"
import { getAllSetting, editSetting } from '../../api/services/setting'
import { useState, useEffect } from 'react'
import { showSuccessModal } from '../store/slices/successModalSlice'
import Loading from '../components/Loading'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'

const NotificationSetting = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { data, isSuccess, isLoading, refetch } = useQuery("setting", getAllSetting)

    const [pendingOrder, setPendingOrder] = useState(false)
    const [outOfStockProduct, setOutOfStockProduct] = useState(false)
    const [emptyProductList, setEmptyProductList] = useState(false)
    const [taskNotDone, setTaskNotDone] = useState(false)

    useEffect(() => {
        if (isSuccess) {
            setPendingOrder(data.pendingOrder)
            setOutOfStockProduct(data.outOfStockProduct)
            setEmptyProductList(data.emptyProductList)
            setTaskNotDone(data.taskNotDone)
        }
    }, [isSuccess])



    const saveSettingHandler = () => {
        const changeSetting = {
            pendingOrder,
            outOfStockProduct,
            emptyProductList,
            taskNotDone
        }
        editSetting(changeSetting)
            .then(res => {
                if (res.status === 200) {
                    dispatch(showSuccessModal({ visibility: true, payload: { title: t("Successful operation"), description: t("Your settings have been applied successfully.") } }))
                    refetch()
                }
            })

    }

    if (isLoading) return <Loading />

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-xs md:text-sm ltr:font-nunitosans-regular rtl:font-iransans-regular cursor-pointer" onClick={() => navigate(-1)}>
                            {t("Back")}
                        </span>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                        {t("global settings")}
                    </h2>
                </div>
                <div className="flex gap-x-1 sm:gap-x-2">
                    <Button type="white" size="small" onSubmit={() => navigate(0)}>
                        <>
                            {t("Cancel")}
                        </>
                    </Button>
                    <Button type="primary" size="small" styles="" onSubmit={saveSettingHandler}>
                        <>
                            {t("Save")}
                        </>
                    </Button>
                </div>
            </div>
            <div className="bg-white rounded-md p-5 xl:p-7 flex flex-col">
                <ul className="border-b flex gap-x-4 sm:gap-x-8 items-center *:text-general-80 ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold pb-1 sm:pb-2 overflow-x-auto overflow-y-hidden text-sm lg:text-base">
                    <li className="*:p-1 *:sm:p-2 *:pt-0 shrink-0">
                        <NavLink
                            to={`/panel/setting/profile`}
                            className={({ isActive }) =>
                                isActive ? "text-primary-100 border-b border-primary-100" : ""
                            }
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li className="*:p-1 *:sm:p-2 *:pt-0 shrink-0">
                        <NavLink
                            to={`/panel/setting/notifications`}
                            className={({ isActive }) =>
                                isActive ? "text-primary-100 border-b border-primary-100" : ""
                            }
                        >
                            Notifications
                        </NavLink>
                    </li>
                    <li className="*:p-1 *:sm:p-2 *:pt-0 shrink-0">
                        <NavLink
                            to={`/panel/setting/general`}
                            className={({ isActive }) =>
                                isActive ? "text-primary-100 border-b border-primary-100" : ""
                            }
                        >
                            Panel Settings
                        </NavLink>
                    </li>
                </ul>
                <div className="flex flex-col divide-y">
                    <div className="py-6 flex justify-between items-center">
                        <div className="flex flex-col">
                            <h4 className='text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold'>
                                Pending Orders
                            </h4>
                            <span className='text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular'>
                                It allows you to see if you have a pending order in the notifications section.
                            </span>
                        </div>
                        <CheckBox forId='PendingOrders' isChecked={pendingOrder} setIsChecked={setPendingOrder} />
                    </div>
                    <div className="py-6 flex justify-between items-center">
                        <div className="flex flex-col">
                            <h4 className='text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold'>
                                Out of stock
                            </h4>
                            <span className='text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular'>
                                You will be notified if a product is out of stock.
                            </span>
                        </div>
                        <CheckBox forId='outOfStockproduct' isChecked={outOfStockProduct} setIsChecked={setOutOfStockProduct} />
                    </div>
                    <div className="py-6 flex justify-between items-center">
                        <div className="flex flex-col">
                            <h4 className='text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold'>
                                Empty of product
                            </h4>
                            <span className='text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular'>
                                Be notified if the store's product list is empty.
                            </span>
                        </div>
                        <CheckBox forId='emptyProductList' isChecked={emptyProductList} setIsChecked={setEmptyProductList} />
                    </div>
                    <div className="pt-6 flex justify-between items-center">
                        <div className="flex flex-col">
                            <h4 className='text-general-100 text-sm xl:text-base ltr:font-nunitosans-extrabold rtl:font-iransans-bold'>
                                Task not done
                            </h4>
                            <span className='text-xs lg:text-sm text-general-60 ltr:font-nunitosans-regular rtl:font-iransans-regular'>
                                If you have an uncompleted task, you will be notified.
                            </span>
                        </div>
                        <CheckBox forId='taskNotDone' isChecked={taskNotDone} setIsChecked={setTaskNotDone} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NotificationSetting