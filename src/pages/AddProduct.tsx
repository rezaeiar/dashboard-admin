const AddProduct = () => {
    return (
        <div className="py-8 px-10 w-full bg-general-30 flex flex-col gap-y-8">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 text-general-80 font-nunitosans-regular items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        <span className="text-sm">
                            Back
                        </span>
                    </div>
                    <h2 className="text-2xl font-nunitosans-bold text-general-100">
                        Add Product
                    </h2>
                </div>
                <div className="flex gap-x-2">
                    <button className="flex border border-general-50 text-xs text-primary-100 bg-white px-5 py-2 rounded gap-x-2 items-center hover:bg-general-40 transition-colors hover:border-general-50">
                        Cancel
                    </button>
                    <button className="flex justify-center bg-primary-100 text-white text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                        Save
                    </button>
                </div>
            </div>
            <div className="grid gap-x-4 grid-cols-7">
                <div className="bg-white rounded-md p-7 col-span-5 flex flex-col gap-y-10 divide-y">
                    <div className="flex flex-col gap-y-6">
                        <h5 className="text-general-100 font-nunitosans-extrabold">
                            Information
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Title
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Enter tag name" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Title
                            </label>
                            <textarea name="" id="" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-10">
                        <h5 className="text-general-100 font-nunitosans-extrabold">
                            Images
                        </h5>
                        <div className="flex flex-col">
                            <div className="border border-dashed border-general-60 rounded-md flex items-center justify-center py-12">
                                <div className="flex items-center justify-center flex-col gap-y-2">
                                    <button className="flex border border-general-50 text-xs text-primary-100 bg-white px-5 py-2 rounded gap-x-2 items-center hover:bg-general-40 transition-colors hover:border-general-50">
                                        Add File
                                    </button>
                                    <span className="text-general-80 text-sm font-nunitosans-regular">
                                        Or drag and drop files
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-10">
                        <h5 className="text-general-100 font-nunitosans-extrabold">
                            Price
                        </h5>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                    Product Price
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Enter price" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                    Discount Price
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Price at Discount" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-10">
                        <h5 className="text-general-100 font-nunitosans-extrabold">
                            Different Options
                        </h5>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                    Size
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Size" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                    Value
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Price at Discount" />
                            </div>
                        </div>
                        <span className="text-primary-100 text-sm font-nunitosans-regular">Create New</span>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-10">
                        <h5 className="text-general-100 font-nunitosans-extrabold">
                            Shipping
                        </h5>
                        <div className="grid grid-cols-2 gap-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                    Weight
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Enter Weight" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                    Country
                                </label>
                                <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Select Country" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 col-span-2">
                    <div className="bg-white rounded-md p-7 flex flex-col gap-y-5">
                        <h5 className="text-general-100 text-sm font-nunitosans-extrabold">
                            Categories
                        </h5>
                        <ul>
                            <li className="text-general-100 text-sm flex items-center gap-x-2">
                                <input type="checkbox" name="" id="" />
                                <span>Women</span>
                            </li>
                            <li className="text-general-100 text-sm flex items-center gap-x-2">
                                <input type="checkbox" name="" id="" />
                                <span>Men</span>
                            </li>
                        </ul>
                        <span className="text-primary-100 text-sm font-nunitosans-regular">
                            Create New
                        </span>
                    </div>
                    <div className="bg-white rounded-md p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-sm font-nunitosans-extrabold">
                            Tags
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Add Tags
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Enter tag name" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex bg-general-40 rounded text-general-80 items-center gap-x-2 text-xs py-1 px-2">
                                T-Shirt
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="flex bg-general-40 rounded text-general-80 items-center gap-x-2 text-xs py-1 px-2">
                                Men Clothes
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div className="flex bg-general-40 rounded text-general-80 items-center gap-x-2 text-xs py-1 px-2">
                                Summer Collection
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        {/* <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Image
                            </label>
                            <div className="border border-dashed border-general-60 rounded-md flex items-center justify-center py-12">
                                <div className="flex items-center justify-center flex-col gap-y-2">
                                    <button className="flex border border-general-50 text-xs text-primary-100 bg-white px-5 py-2 rounded gap-x-2 items-center hover:bg-general-40 transition-colors hover:border-general-50">
                                        Add File
                                    </button>
                                    <span className="text-general-80 text-sm font-nunitosans-regular">
                                        Or drag and drop files
                                    </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="bg-white rounded-md p-7 flex flex-col gap-y-4">
                        <h5 className="text-general-100 text-sm font-nunitosans-extrabold">
                            SEO Settings
                        </h5>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Title
                            </label>
                            <input type="text" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4" placeholder="Enter tag name" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-sm text-general-60 font-nunitosans-regular">
                                Description
                            </label>
                            <textarea name="" id="" className="border border-general-50 outline-none rounded text-sm text-general-100 py-2 px-4">

                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct