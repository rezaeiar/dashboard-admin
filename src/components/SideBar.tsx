const SideBar = () => {
    return (
        <div className='bg-general-30 w-64 min-h-screen border-r border-general-50 py-4 flex flex-col gap-y-4'>
            <div className="flex flex-col gap-y-3 border-b pb-3">

                <ul className='flex flex-col gap-y-1'>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Dashboard
                            </div>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                </svg>
                                Orders
                            </div>
                            <span className='bg-general-100 text-white text-xs rounded-full h-min px-1.5 py-0.5 text-center'>
                                16
                            </span>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                Products
                            </div>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>
                                Categories
                            </div>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                Customers
                            </div>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e before:absolute'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center bg-primary-100 text-white hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                </svg>
                                Categories
                            </div>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                Inbox
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-3 border-b pb-3">
                <span className="text-xs mx-8 text-general-60">
                    Other Information
                </span>
                <ul className='flex flex-col gap-y-1'>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                </svg>
                                Knowledge Base
                            </div>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                                </svg>
                                Product Updates
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-3">
                <span className="text-xs mx-8 text-general-60">
                    Settings
                </span>
                <ul className='flex flex-col gap-y-1'>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                Personal Settings
                            </div>
                        </div>
                    </li>
                    <li className='relative before:bg-primary-100 before:h-full before:w-1 before:rounded-e'>
                        <div className="h-10 px-4 mx-4 rounded text-sm flex justify-between items-center text-general-80 hover:bg-primary-100 hover:text-white transition-colors cursor-pointer">
                            <div className="flex gap-x-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                Global Settings
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar