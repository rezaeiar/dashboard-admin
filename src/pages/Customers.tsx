const Customers = () => {
    return (
        <div className="py-8 px-10 w-full bg-general-30 flex flex-col gap-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-nunitosans-bold text-general-100">
                    Customers
                </h2>
                <div className="flex gap-x-2">
                    <button className="flex border border-general-50 text-xs text-primary-100 bg-white px-5 py-2 rounded gap-x-2 items-center hover:bg-general-40 transition-colors hover:border-general-50">
                        Export
                    </button>
                    <button className="flex justify-center bg-primary-100 text-white text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add Customer
                    </button>
                </div>
            </div>
            <div className="border border-general-50 bg-white rounded-md flex w-fit text-sm font-nunitosans-bold text-general-100 divide-x overflow-hidden">
                <div className="p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                </div>
                <div className="p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                    Filter By
                </div>
                <div className="p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                    Price
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                    Category
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors">
                    Inventory
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="p-6 shrink-0 flex items-center gap-x-2 cursor-pointer hover:bg-general-30 transition-colors text-red-101">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                    Reset Filter
                </div>
            </div>
            <table className='border divide-y border-general-50 bg-white rounded-md w-full flex flex-col overflow-hidden'>
                <tr className='p-4 bg-general-30 grid grid-cols-5 text-sm font-nunitosans-extrabold text-general-100 child:text-start'>
                    <th className="col-span-2">Name</th>
                    <th>Location</th>
                    <th>Orders</th>
                    <th>Spent</th>
                </tr>
                <tr className='p-4 bg-white grid grid-cols-5 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                    <td className="col-span-2">
                        <div className="flex items-center gap-x-3">
                            <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                M
                            </div>
                            <span>
                                Walter Gibson
                            </span>
                        </div>
                    </td>
                    <td>Sawaynchester</td>
                    <td>54</td>
                    <td>$96.14</td>
                </tr>
                <tr className='p-4 bg-white grid grid-cols-5 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                    <td className="col-span-2">
                        <div className="flex items-center gap-x-3">
                            <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                M
                            </div>
                            <span>
                                Walter Gibson
                            </span>
                        </div>
                    </td>
                    <td>Sawaynchester</td>
                    <td>54</td>
                    <td>$96.14</td>
                </tr>
                <tr className='p-4 bg-white grid grid-cols-5 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                    <td className="col-span-2">
                        <div className="flex items-center gap-x-3">
                            <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                M
                            </div>
                            <span>
                                Walter Gibson
                            </span>
                        </div>
                    </td>
                    <td>Sawaynchester</td>
                    <td>54</td>
                    <td>$96.14</td>
                </tr>
                <tr className='p-4 bg-white grid grid-cols-5 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                    <td className="col-span-2">
                        <div className="flex items-center gap-x-3">
                            <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                M
                            </div>
                            <span>
                                Walter Gibson
                            </span>
                        </div>
                    </td>
                    <td>Sawaynchester</td>
                    <td>54</td>
                    <td>$96.14</td>
                </tr>
                <tr className='p-4 bg-white grid grid-cols-5 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                    <td className="col-span-2">
                        <div className="flex items-center gap-x-3">
                            <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                M
                            </div>
                            <span>
                                Walter Gibson
                            </span>
                        </div>
                    </td>
                    <td>Sawaynchester</td>
                    <td>54</td>
                    <td>$96.14</td>
                </tr>
                <tr className='p-4 bg-white grid grid-cols-5 text-sm text-general-90 child:line-clamp-1 child:h-min items-center child:text-start'>
                    <td className="col-span-2">
                        <div className="flex items-center gap-x-3">
                            <div className="h-12 w-12 bg-general-60 rounded-full text-white flex items-center justify-center">
                                M
                            </div>
                            <span>
                                Walter Gibson
                            </span>
                        </div>
                    </td>
                    <td>Sawaynchester</td>
                    <td>54</td>
                    <td>$96.14</td>
                </tr>
            </table>

            <div className="text-sm flex justify-between">
                <span className="text-general-80">
                    Showing 1-09 of 78
                </span>
                <div className="flex border border-general-50 divide-x rounded-md">
                    <div className="px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-80">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-general-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers