import CategorieCard from "../components/CategorieCard"
const Categories = () => {
    return (
        <div className="py-8 px-10 w-full bg-general-30 flex flex-col gap-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-nunitosans-bold text-general-100">
                    Categories
                </h2>
                <div className="flex gap-x-2">
                    <button className="flex justify-center bg-primary-100 text-white text-xs px-5 py-2 rounded gap-x-2 items-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add Category
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
                <CategorieCard />
            </div>
        </div>
    )
}

export default Categories