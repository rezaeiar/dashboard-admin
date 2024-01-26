type NotificationCardProps = {
    show: boolean,
}
const NotificationCard = (props: NotificationCardProps) => {
    return (
        <div className={`${props.show ? 'visible opacity-100' : 'invisible opacity-0'} flex transition-all flex-col w-max bg-white shadow-box rounded-xl absolute top-12 rtl:-right-28 ltr:-left-28 divide-y border border-general-30 overflow-hidden`}>
            <div className="py-3 px-5">
                <span className='text-sm text-general-80 font-nunitosans-regular'>
                    Notification
                </span>
            </div>
            <div className="flex flex-col child-hover:bg-general-30">
                <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                    <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#4E96FF] to-[#80C9FC] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                            Settings
                        </h4>
                        <span className="hidden md:block text-general-60 text-[10px] lg:text-xs">
                            Update Dashboard
                        </span>
                    </div>
                </div>
                <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                    <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#F97FD9] to-[#FFC1E6] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>

                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                            Event Update
                        </h4>
                        <span className="hidden md:block text-general-60 text-[10px] lg:text-xs">
                            An event date update again
                        </span>
                    </div>
                </div>
                <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                    <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#9E8FFF] to-[#EBCBFF] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                            Profile
                        </h4>
                        <span className="hidden md:block text-general-60 text-[10px] lg:text-xs">
                            Update your profile
                        </span>
                    </div>
                </div>
                <div className="py-3 px-5 flex items-center gap-x-2 text-general-90">
                    <div className="flex items-center justify-center rounded-full h-9 w-9 bg-gradient-to-b from-[#FF8F8F] to-[#FFC1C1] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <h4 className="text-general-100 text-xs lg:text-sm font-nunitosans-bold">
                            Application Error
                        </h4>
                        <span className="hidden md:block text-general-60 text-[10px] lg:text-xs">
                            Check Your runnung application
                        </span>
                    </div>
                </div>
            </div>
            <div className="py-3 flex justify-center">
                <span className='text-xs text-general-60 font-nunitosans-regular'>
                    See all notification
                </span>
            </div>
        </div >
    )
}

export default NotificationCard