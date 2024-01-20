const CategorieCard = () => {
    return (
        <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-card cursor-pointer group">
            <div className="relative">
                <img src="./images/Bitmap.png" alt="" />
                <div className="h-full w-full absolute bg-general-90 bg-opacity-0 top-0 left-0 group-hover:bg-opacity-70 transition-colors items-center justify-center flex">
                    <button className="border border-general-50 font-nunitosans-bold text-xs text-primary-100 bg-white px-4 py-2 rounded gap-x-2 items-center hover:bg-general-40 transition-colors hover:border-general-50 hidden opacity-0 group-hover:flex group-hover:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        Edit
                    </button>
                </div>
            </div>
            <div className="py-5 px-7">
                <h3 className="text-general-100 font-nunitosans-extrabold">
                    Men Clothes
                </h3>
                <span className="text-general-80 text-sm font-nunitosans-regular">
                    24 items
                </span>
            </div>
        </div>
    )
}

export default CategorieCard