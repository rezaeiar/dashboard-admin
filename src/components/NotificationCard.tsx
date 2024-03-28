import { useQuery } from "react-query"
import { getAllOrders } from "../../api/services/order"
import { getAllSetting } from "../../api/services/setting"
import { getAllProducts } from "../../api/services/product"
import { useTranslation } from "react-i18next"
import { getUserTasks } from "../../api/services/task"
import { useDispatch } from "react-redux"
import { setNotificationsLength } from "../store/slices/NotificationsLengthSlice"
import { useEffect } from "react"
import { Link } from "react-router-dom"

type NotificationCardProps = {
    show: boolean,
}
const NotificationCard = (props: NotificationCardProps) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()

    const { data, isSuccess } = useQuery("setting", getAllSetting)
    const { data: ordersData, isSuccess: ordersIsSuccess } = useQuery("orders", getAllOrders)
    const { data: productsData, isSuccess: productsIsSuccess } = useQuery("products", getAllProducts)
    const { data: userTasksData, isSuccess: userTasksIsSuccess } = useQuery("user-tasks", getUserTasks)

    const outOfStockProductHandler = () => {
        const outOfStockLength = productsIsSuccess && productsData.filter((order: any) => order.inـstock === false).length
        return outOfStockLength
    }

    const pendingOrderHandler = () => {
        const pendingOrderLength = ordersIsSuccess && ordersData.filter((order: any) => order.status === "PENDING").length
        return pendingOrderLength
    }

    const emptyProductListHandler = () => {
        return productsIsSuccess && productsData.length ? false : true
    }

    const taskNotDoneHandler = () => {
        const taskNotDoneLength = userTasksIsSuccess && userTasksData.length
        return taskNotDoneLength
    }

    const calcNotificationsLength = () => {
        let notificationsLength = 0

        if (isSuccess) {
            if (data.outOfStockProduct && outOfStockProductHandler()) notificationsLength++;
            if (data.pendingOrder && pendingOrderHandler()) notificationsLength++;
            if (data.emptyProductList && emptyProductListHandler()) notificationsLength++;
            if (data.taskNotDone && taskNotDoneHandler()) notificationsLength++;
        }

        return notificationsLength
    }

    useEffect(() => {
        dispatch(setNotificationsLength(calcNotificationsLength()));
    }, [calcNotificationsLength()])


    return (
        <div className={`${props.show ? 'visible opacity-100' : 'invisible opacity-0'} flex transition-all flex-col w-max bg-white shadow-box rounded-xl absolute top-12 rtl:-right-28 ltr:-left-28 divide-y border border-general-30 overflow-hidden`}>
            <div className="py-3 px-5">
                <span className='text-sm text-general-80 font-nunitosans-regular'>
                    Notification
                </span>
            </div>
            {
                calcNotificationsLength() ?
                    <div className="flex flex-col child-hover:bg-general-30">
                        {
                            !!(isSuccess && !!data.outOfStockProduct && outOfStockProductHandler()) &&
                            <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                                <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#4E96FF] to-[#80C9FC] text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>

                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                                        {t("Empty product inventory")}
                                    </h4>
                                    <span className="hidden md:block text-general-60 text-[10px] lg:text-xs ltr:font-nunitosans-regular rtl:font-iransans-semiBold">
                                        {t(`Take action to increase product inventory (${outOfStockProductHandler()})`)}
                                    </span>
                                </div>
                            </div>
                        }
                        {
                            !!(isSuccess && !!data.pendingOrder && pendingOrderHandler()) &&
                            <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                                <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#F97FD9] to-[#FFC1E6] text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                                    </svg>

                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                                        Pending Orders
                                    </h4>
                                    <span className="hidden md:block text-general-60 text-[10px] lg:text-xs ltr:font-nunitosans-regular rtl:font-iransans-semiBold">
                                        Do you have a number of pending orders ({pendingOrderHandler()})
                                    </span>
                                </div>
                            </div>
                        }
                        {
                            !!(isSuccess && !!data.emptyProductList && emptyProductListHandler()) &&
                            <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                                <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#9E8FFF] to-[#EBCBFF] text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                                        Empty of product
                                    </h4>
                                    <span className="hidden md:block text-general-60 text-[10px] lg:text-xs ltr:font-nunitosans-regular rtl:font-iransans-semiBold">
                                        There are no products for sale.
                                    </span>
                                </div>
                            </div>
                        }
                        {
                            !!(isSuccess && !!data.taskNotDone && taskNotDoneHandler()) &&
                            <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                                <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#FF8F8F] to-[#FFC1C1] text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                                        Task not done
                                    </h4>
                                    <span className="hidden md:block text-general-60 text-[10px] lg:text-xs ltr:font-nunitosans-regular rtl:font-iransans-semiBold">
                                        You have an unfinished task.
                                    </span>
                                </div>
                            </div>
                        }
                    </div> :
                    <div className="py-3 px-5 text-general-90 ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold text-sm">
                        There are currently no notifications.
                    </div>
            }
            <div className="py-3 flex justify-center">
                <Link to={'/panel/setting/notifications'} className='text-xs text-general-60 font-nunitosans-regular'>
                    Manage notifications
                </Link>
            </div>
        </div >
    )
}

export default NotificationCard