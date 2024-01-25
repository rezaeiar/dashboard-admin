import AdminCard from "./AdminCard"
import Tooltip from "./Tooltip"

const TopBar = () => {
    return (
        <div className='sticky top-0 w-full h-16 bg-white shadow flex justify-between items-center px-4 z-40'>
            <div className="flex gap-x-6 lg:gap-x-8 grow">
                <h1 className='text-lg lg:text-xl flex items-center font-nunitosans-extrabold cursor-default'>
                    <span className='text-primary-100'>Dash</span>
                    <span className='text-general-100'>Stack</span>
                </h1>
                <div className="hidden md:flex items-center font-nunitosans-regular relative text-sm text-general-70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-3 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" className='h-10 w-72 lg:w-96 rounded-full border border-white focus:border-general-40 transition-colors outline-none px-10 placeholder:text-general-70' placeholder='Search' />
                </div>
            </div>
            <div className="flex gap-x-6 md:gap-x-8 items-center *:cursor-pointer *:shrink-0">
                <div className="relative hidden md:block">
                    <div className="h-4 w-4 bg-primary-100 absolute rounded-full text-white text-[10px] flex items-center justify-center -right-1.5 -top-1.5">
                        4
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-general-70">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <Tooltip />
                </div>
                <div className="relative hidden sm:flex gap-x-2 lg:gap-x-3 items-center">
                    <div className="hidden md:block rounded-md overflow-hidden">
                        <img src="./topbar/UK Flag.svg" className="h-6 lg:h-7" alt="language" />
                    </div>
                    <span className='text-general-70 text-xs lg:text-sm'>
                        English
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-general-70">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="relative hidden sm:flex gap-x-2 lg:gap-x-3 items-center">
                    <div className="hidden md:flex rounded-full bg-general-40 h-8 w-8 lg:h-9 lg:w-9 overflow-hidden">
                        <img src="/images/a-l-l-e-f-v-i-n-i-c-i-u-s-343875-unsplash.png" alt="admin" />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <h4 className='text-general-100 text-xs lg:text-sm font-nunitosans-bold'>
                            Moni Roy
                        </h4>
                        <span className='hidden md:block text-general-60 text-[10px] lg:text-xs'>
                            Admin
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-general-70">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    <AdminCard />
                </div>
                <div className="block md:hidden text-general-70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TopBar