const LanguageSelection = () => {
    return (
        <div className="hidden opacity-0 transition-all flex-col w-max bg-white shadow-box rounded-xl absolute top-12 right-0 divide-y  border border-general-30 overflow-hidden">
            <div className="py-3 px-5">
                <span className='text-sm text-general-80 font-nunitosans-regular'>
                    Select Language
                </span>
            </div>
            <div className="flex flex-col child-hover:bg-general-30">
                <div className="py-3 px-5 flex justify-between items-center gap-x-10 text-general-90">
                    <div className="flex items-center gap-x-2">
                        <img src="./topbar/Flag_of_Iran.svg.webp" className="h-6 lg:h-7 w-12 object-cover" alt="language" />
                        <span className="text-sm">
                            Persian
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </div>
                <div className="py-3 px-5 flex justify-between items-center gap-x-10 text-general-90">
                    <div className="flex items-center gap-x-2">
                        <img src="./topbar/UK Flag.svg" className="h-6 lg:h-7 w-12 object-cover" alt="language" />
                        <span className="text-sm">
                            English
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LanguageSelection