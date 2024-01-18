import React from 'react'

const Header = () => {
    return (
        <div className='w-full h-16 bg-white shadow flex justify-between items-center px-4'>
            <div className="flex gap-x-8">
                <h1 className='text-xl flex items-center'>
                    <span className='text-primary-100'>Dash</span>
                    <span className='text-general-100'>Stack</span>
                </h1>
                <div className="">
                    <input type="text" className='h-10 min-w-96 bg-general-30 rounded-full border border-general-40 outline-none px-4 text-sm text-general-60 placeholder:text-general-60' placeholder='Search' />
                </div>
            </div>
            <div className="flex gap-x-5 items-center">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-general-70">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
                <div className="flex gap-x-4 items-center">
                    <div className="rounded-md overflow-hidden">
                        <img src="./UK Flag.svg" alt="" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <span className='text-general-70 text-sm'>
                            English
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-70 text-sm">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="flex gap-x-4 items-center">
                    <div className="rounded-full bg-gray-900 h-10 w-10"></div>
                    <div className="flex flex-col gap-y-1">
                        <h4 className='text-general-100 text-sm'>
                            Moni Roy
                        </h4>
                        <span className='text-general-70 text-xs'>
                            Admin
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-70 text-sm">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header