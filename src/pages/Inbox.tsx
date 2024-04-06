import { useTranslation } from "react-i18next"
import Button from "../components/Button"

const Inbox = () => {

    const { t } = useTranslation()

    return (
        <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full bg-general-30 flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-8 overflow-hidden min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-2xl font-nunitosans-bold rtl:font-iransans-bold text-general-100 capitalize">
                    {t("Inbox")}
                </h2>
                <div className="flex gap-x-1 sm:gap-x-2">
                </div>
            </div>
            <div className="grid grid-cols-4 overflow-hidden gap-3 lg:gap-4">
                <div className="bg-white border rounded-lg flex flex-col overflow-hidden divide-y">
                    <div className="flex justify-between items-center p-2 bg-general-30">
                        <div className="flex gap-2">
                            <div className="bg-general-100 aspect-square h-full w-10 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xs text-general-100 font-nunitosans-semiBold">
                                    John Doe
                                </h4>
                                <span className="text-[10px] line-clamp-1 text-general-80 font-iransans-regular">
                                    Hi, i want to send a message.
                                </span>
                            </div>
                        </div>
                        <div className="bg-general-50 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-general-80">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <div className="flex gap-2">
                            <div className="bg-general-100 aspect-square h-full w-10 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xs text-general-100 font-nunitosans-semiBold">
                                    John Doe
                                </h4>
                                <span className="text-[10px] line-clamp-1 text-general-80 font-iransans-regular">
                                    Hi, i want to send a message.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <div className="flex gap-2">
                            <div className="bg-general-100 aspect-square h-full w-10 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xs text-general-100 font-nunitosans-semiBold">
                                    John Doe
                                </h4>
                                <span className="text-[10px] line-clamp-1 text-general-80 font-iransans-regular">
                                    Hi, i want to send a message.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <div className="flex gap-2">
                            <div className="bg-general-100 aspect-square h-full w-10 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xs text-general-100 font-nunitosans-semiBold">
                                    John Doe
                                </h4>
                                <span className="text-[10px] line-clamp-1 text-general-80 font-iransans-regular">
                                    Hi, i want to send a message.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <div className="flex gap-2">
                            <div className="bg-general-100 aspect-square h-full w-10 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xs text-general-100 font-nunitosans-semiBold">
                                    John Doe
                                </h4>
                                <span className="text-[10px] line-clamp-1 text-general-80 font-iransans-regular">
                                    Hi, i want to send a message.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <div className="flex gap-2">
                            <div className="bg-general-100 aspect-square h-full w-10 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xs text-general-100 font-nunitosans-semiBold">
                                    John Doe
                                </h4>
                                <span className="text-[10px] line-clamp-1 text-general-80 font-iransans-regular">
                                    Hi, i want to send a message.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2">
                        <div className="flex gap-2">
                            <div className="bg-general-100 aspect-square h-full w-10 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xs text-general-100 font-nunitosans-semiBold">
                                    John Doe
                                </h4>
                                <span className="text-[10px] line-clamp-1 text-general-80 font-iransans-regular">
                                    Hi, i want to send a message.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white border rounded-lg col-span-3">
                    <div className="p-3 flex justify-between items-center border-b">
                        <div className="flex gap-3 items-center">
                            <div className="bg-general-30 rounded shrink-0 h-fit p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 rtl:rotate-180 text-general-80">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </div>
                            <h3 className="text-general-100 font-nunitosans-bold">
                                John Doe
                            </h3>
                            <div className="py-0.5 px-2 h-fit text-xs rounded-md bg-primary-40 text-primary-100 ltr:font-nunitosans-semiBold rtl:font-iransans-semiBold">
                                {t("Admin")}
                            </div>
                        </div>
                        <div className="flex bg-general-30 rounded border ltr:divide-x">
                            <div className="p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                            <div className="p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 flex flex-col overflow-y-auto p-4 gap-4">
                        <div className="flex gap-3 w-[80%]">
                            <div className="h-10 w-10 bg-general-50 rounded-full shrink-0 self-end"></div>
                            <div className="flex flex-col p-3 bg-general-40 rounded rounded-bl-none">
                                <span className="text-sm text-general-100">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo voluptates molestias maxime possimus laudantium nostrum accusantium reprehenderit doloremque, aut ullam explicabo officiis ex labore expedita cumque unde dignissimos ea?
                                </span>
                                <span className="text-end text-general-80 text-xs">
                                    3:14 pm
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3 w-[80%] self-end">
                            <div className="flex flex-col p-3 bg-primary-100 rounded rounded-br-none">
                                <span className="text-sm text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo voluptates molestias maxime possimus laudantium nostrum accusantium reprehenderit doloremque, aut ullam explicabo officiis ex labore expedita cumque unde dignissimos ea?
                                </span>
                                <span className="text-end text-white text-xs">
                                    3:14 pm
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3 w-[80%]">
                            <div className="h-10 w-10 bg-general-50 rounded-full shrink-0 self-end"></div>
                            <div className="flex flex-col p-3 bg-general-40 rounded rounded-bl-none">
                                <span className="text-sm text-general-100">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo voluptates molestias maxime possimus laudantium nostrum accusantium reprehenderit doloremque, aut ullam explicabo officiis ex labore expedita cumque unde dignissimos ea?
                                </span>
                                <span className="text-end text-general-80 text-xs">
                                    3:14 pm
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex justify-between items-center border-t">
                        <div className="flex gap-3 items-center grow">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-general-80">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                </svg>
                            </div>
                            <input type="text" name="send-message" className="w-full grow outline-none resize-none placeholder:text-general-70 text-sm placeholder:ltr:font-nunitosans-regular placeholder:rtl:font-iransans-regular" placeholder={t("Write Message..")} />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-general-80">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <Button type="primary" size="small" link="/panel/customers/add">
                                <>
                                    {t("Send")}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 rtl:rotate-180">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                </>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox